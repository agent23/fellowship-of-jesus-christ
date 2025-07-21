import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'moderator';
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<AdminUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    // Check if user is already logged in (from localStorage)
    this.checkStoredAuth();
  }

  private checkStoredAuth(): void {
    const storedUser = localStorage.getItem('adminUser');
    const storedToken = localStorage.getItem('adminToken');
    
    if (storedUser && storedToken) {
      const user = JSON.parse(storedUser);
      this.currentUserSubject.next(user);
      this.isLoggedInSubject.next(true);
    }
  }

  async login(username: string, password: string): Promise<{ success: boolean; message: string }> {
    // For demo purposes, we'll use hardcoded credentials
    // In a real application, this would make an API call to your backend
    const validCredentials = [
      { username: 'admin', password: 'church2024', role: 'admin' as const },
      { username: 'pastor', password: 'fellowship123', role: 'admin' as const },
      { username: 'moderator', password: 'mod2024', role: 'moderator' as const }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const credential = validCredentials.find(
      cred => cred.username === username && cred.password === password
    );

    if (credential) {
      const user: AdminUser = {
        id: Math.random().toString(36).substr(2, 9),
        username: credential.username,
        role: credential.role,
        permissions: this.getPermissionsForRole(credential.role)
      };

      // Store in localStorage (in production, use secure httpOnly cookies)
      localStorage.setItem('adminUser', JSON.stringify(user));
      localStorage.setItem('adminToken', 'demo-jwt-token-' + user.id);

      this.currentUserSubject.next(user);
      this.isLoggedInSubject.next(true);

      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  }

  logout(): void {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('adminToken');
    this.currentUserSubject.next(null);
    this.isLoggedInSubject.next(false);
  }

  getCurrentUser(): AdminUser | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.permissions.includes(permission) : false;
  }

  private getPermissionsForRole(role: 'admin' | 'moderator'): string[] {
    const permissions = {
      admin: [
        'upload_files',
        'manage_blog',
        'manage_events',
        'manage_archives',
        'manage_users',
        'view_analytics',
        'system_settings'
      ],
      moderator: [
        'upload_files',
        'manage_blog',
        'manage_events',
        'view_analytics'
      ]
    };

    return permissions[role] || [];
  }
}
