import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService, AdminUser } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    CommonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  navigationItems = [
    { label: 'Home', route: '/home' },
    // { label: 'Services', route: '/services' },
    // { label: 'Events', route: '/events' },
    // { label: 'Blog', route: '/blog' },
    // { label: 'Archives', route: '/archives' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];

  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<AdminUser | null>;


  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.currentUser$ = this.authService.currentUser$;
  }

  logout(): void {
    this.authService.logout();
  }
}
