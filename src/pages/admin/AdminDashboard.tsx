import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Users, 
  Calendar, 
  Euro, 
  Star,
  Plus,
  Eye,
  Settings,
  TrendingUp
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface DashboardStats {
  activeServices: number;
  totalBookings: number;
  monthlyRevenue: number;
  averageRating: number;
}

interface RecentBooking {
  id: string;
  client_name: string;
  service_name: string;
  appointment_date: string;
  status: string;
  price: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    activeServices: 0,
    totalBookings: 0,
    monthlyRevenue: 0,
    averageRating: 0
  });
  const [recentBookings, setRecentBookings] = useState<RecentBooking[]>([]);
  const [siteStatus, setSiteStatus] = useState({
    online: true,
    bookings: true
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load services count
      const { count: servicesCount } = await supabase
        .from('services')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true);

      // Load bookings count
      const { count: bookingsCount } = await supabase
        .from('bookings')
        .select('*', { count: 'exact', head: true });

      // Load revenue (sum of confirmed bookings)
      const { data: revenueData } = await supabase
        .from('bookings')
        .select('price')
        .eq('status', 'confirmed');

      const totalRevenue = revenueData?.reduce((sum, booking) => sum + booking.price, 0) || 0;

      // Load average rating
      const { data: ratingsData } = await supabase
        .from('testimonials')
        .select('rating');

      const averageRating = ratingsData?.length 
        ? ratingsData.reduce((sum, t) => sum + t.rating, 0) / ratingsData.length 
        : 0;

      // Load recent bookings
      const { data: bookingsData } = await supabase
        .from('bookings')
        .select(`
          id,
          client_name,
          appointment_date,
          status,
          price,
          services (name)
        `)
        .order('created_at', { ascending: false })
        .limit(3);

      setStats({
        activeServices: servicesCount || 0,
        totalBookings: bookingsCount || 0,
        monthlyRevenue: totalRevenue / 100, // Convert from cents to euros
        averageRating: Math.round(averageRating * 10) / 10
      });

      setRecentBookings(bookingsData?.map(booking => ({
        id: booking.id,
        client_name: booking.client_name,
        service_name: (booking.services as any)?.name || 'Service inconnu',
        appointment_date: booking.appointment_date,
        status: booking.status,
        price: booking.price / 100 // Convert from cents
      })) || []);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="default" className="bg-green-100 text-green-800">Confirmé</Badge>;
      case 'pending':
        return <Badge variant="secondary">En attente</Badge>;
      case 'completed':
        return <Badge variant="outline">Terminé</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Annulé</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              Bonjour Barbara ! 👋
            </h1>
            <p className="text-primary-foreground/80 mt-1">
              Voici un aperçu de votre activité Nyuman aujourd'hui
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-primary-foreground/80">Aujourd'hui</div>
            <div className="font-semibold">
              {new Date().toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services Actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeServices}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> ce mois
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Réservations</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBookings}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> ce mois
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenus</CardTitle>
            <Euro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.monthlyRevenue.toLocaleString()}€</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> ce mois
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}/5</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.2</span> ce mois
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Réservations Récentes</CardTitle>
              <CardDescription>Dernières demandes de rendez-vous</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/admin/bookings">
                <Eye className="w-4 h-4 mr-2" />
                Voir tout
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {getInitials(booking.client_name)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{booking.client_name}</div>
                      <div className="text-sm text-muted-foreground">{booking.service_name}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(booking.appointment_date)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(booking.status)}
                    <div className="text-sm font-medium">{booking.price}€</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Site Status */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions Rapides</CardTitle>
              <CardDescription>Raccourcis vers les fonctions principales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/admin/services">
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter un service
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/admin/bookings">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nouvelle réservation
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/admin/gallery">
                  <Settings className="w-4 h-4 mr-2" />
                  Gérer la galerie
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/admin/settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres du site
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Site Status */}
          <Card>
            <CardHeader>
              <CardTitle>État du Site</CardTitle>
              <CardDescription>Contrôles rapides du site web</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Site en ligne</div>
                  <div className="text-sm text-muted-foreground">Visible par les clients</div>
                </div>
                <Switch 
                  checked={siteStatus.online} 
                  onCheckedChange={(checked) => setSiteStatus(prev => ({ ...prev, online: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Réservations</div>
                  <div className="text-sm text-muted-foreground">Système de booking</div>
                </div>
                <Switch 
                  checked={siteStatus.bookings} 
                  onCheckedChange={(checked) => setSiteStatus(prev => ({ ...prev, bookings: checked }))}
                />
              </div>
              <div className="pt-2 border-t space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Performance</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Visiteurs</span>
                  <span className="font-medium">1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Conversions</span>
                  <span className="font-medium">8.3%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Satisfaction</span>
                  <span className="font-medium">{stats.averageRating}/5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}