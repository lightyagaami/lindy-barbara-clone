import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Scissors,
  Calendar,
  Clock,
  MessageSquare,
  Image,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/auth/AuthProvider';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  {
    title: 'Tableau de bord',
    subtitle: 'Vue d\'ensemble',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Services',
    subtitle: 'Gestion des prestations',
    href: '/admin/services',
    icon: Scissors,
  },
  {
    title: 'Disponibilités',
    subtitle: 'Horaires et créneaux',
    href: '/admin/availability',
    icon: Clock,
  },
  {
    title: 'Réservations',
    subtitle: 'Gestion des RDV',
    href: '/admin/bookings',
    icon: Calendar,
    badge: 3,
  },
  {
    title: 'Témoignages',
    subtitle: 'Avis clients',
    href: '/admin/testimonials',
    icon: MessageSquare,
  },
  {
    title: 'Galerie',
    subtitle: 'Photos et catégories',
    href: '/admin/gallery',
    icon: Image,
  },
  {
    title: 'Contenu',
    subtitle: 'Textes du site',
    href: '/admin/content',
    icon: FileText,
  },
  {
    title: 'Paramètres',
    subtitle: 'Configuration',
    href: '/admin/settings',
    icon: Settings,
  },
];

export const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <div className="w-64 bg-background border-r border-border h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Nyuman</h2>
            <p className="text-sm text-muted-foreground">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors relative",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className={cn(
                      "text-xs",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {item.subtitle}
                    </div>
                  </div>
                  {item.badge && (
                    <span className="bg-destructive text-destructive-foreground text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3 mb-3">
          <img 
            src="/src/assets/barbara-hero.jpg" 
            alt="Barbara Admin" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="font-medium text-sm">Barbara Admin</div>
            <div className="text-xs text-muted-foreground">Ambassadrice Nyuman</div>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full" 
          onClick={signOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Déconnexion
        </Button>
      </div>
    </div>
  );
};