import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="login-container">
      <div class="login-card-container">
        <mat-card class="login-card">
          <mat-card-header>
            <div class="login-header">
              <mat-icon class="church-icon">church</mat-icon>
              <div>
                <mat-card-title>Admin Login</mat-card-title>
                <mat-card-subtitle>Fellowship of Jesus Christ</mat-card-subtitle>
              </div>
            </div>
          </mat-card-header>

          <mat-card-content>
            <form #loginForm="ngForm" (ngSubmit)="onLogin()" class="login-form">
              <mat-form-field appearance="outline">
                <mat-label>Username</mat-label>
                <input matInput 
                       [(ngModel)]="credentials.username" 
                       name="username"
                       required
                       #username="ngModel"
                       [disabled]="isLoading">
                <mat-icon matSuffix>person</mat-icon>
                <mat-error *ngIf="username.invalid && username.touched">
                  Username is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Password</mat-label>
                <input matInput 
                       [type]="hidePassword ? 'password' : 'text'"
                       [(ngModel)]="credentials.password" 
                       name="password"
                       required
                       #password="ngModel"
                       [disabled]="isLoading">
                <button mat-icon-button 
                        matSuffix 
                        type="button"
                        (click)="hidePassword = !hidePassword">
                  <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
                <mat-error *ngIf="password.invalid && password.touched">
                  Password is required
                </mat-error>
              </mat-form-field>

              <div class="error-message" *ngIf="errorMessage">
                <mat-icon>error</mat-icon>
                {{ errorMessage }}
              </div>

              <div class="login-actions">
                <button mat-raised-button 
                        color="primary" 
                        type="submit"
                        [disabled]="loginForm.invalid || isLoading"
                        class="login-button">
                  <mat-spinner *ngIf="isLoading" diameter="20"></mat-spinner>
                  <span *ngIf="!isLoading">Login</span>
                  <span *ngIf="isLoading">Signing in...</span>
                </button>
              </div>
            </form>

            <div class="demo-credentials">
              <h4>Demo Credentials:</h4>
              <div class="credential-item">
                <strong>Admin:</strong> admin / church2024
              </div>
              <div class="credential-item">
                <strong>Pastor:</strong> pastor / fellowship123
              </div>
              <div class="credential-item">
                <strong>Moderator:</strong> moderator / mod2024
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1e3c72, #2d5aa0);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .login-card-container {
      width: 100%;
      max-width: 450px;
    }

    .login-card {
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .login-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;

      .church-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        color: #1e3c72;
      }

      mat-card-title {
        color: #1e3c72;
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0;
      }

      mat-card-subtitle {
        color: #64748b;
        font-size: 1rem;
        margin: 0;
      }
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      mat-form-field {
        width: 100%;
      }
    }

    .error-message {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #dc2626;
      background: rgba(220, 38, 38, 0.1);
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #dc2626;

      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    }

    .login-actions {
      margin-top: 1rem;

      .login-button {
        width: 100%;
        padding: 12px;
        font-size: 1.1rem;
        font-weight: 500;
        background: linear-gradient(135deg, #1e3c72, #2d5aa0);

        mat-spinner {
          margin-right: 8px;
        }

        &:hover:not(:disabled) {
          background: linear-gradient(135deg, #2d5aa0, #1e3c72);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(30, 60, 114, 0.3);
        }

        &:disabled {
          opacity: 0.6;
        }
      }
    }

    .demo-credentials {
      margin-top: 2rem;
      padding: 1.5rem;
      background: rgba(30, 60, 114, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(30, 60, 114, 0.1);

      h4 {
        color: #1e3c72;
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
      }

      .credential-item {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #64748b;

        strong {
          color: #1e3c72;
        }
      }
    }

    @media (max-width: 768px) {
      .login-container {
        padding: 1rem;
      }

      .login-card {
        padding: 1.5rem;
      }

      .login-header {
        .church-icon {
          font-size: 36px;
          width: 36px;
          height: 36px;
        }

        mat-card-title {
          font-size: 1.5rem;
        }
      }
    }
  `]
})
export class AdminLoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  hidePassword = true;
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirect if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  async onLogin(): Promise<void> {
    if (!this.credentials.username || !this.credentials.password) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      const result = await this.authService.login(
        this.credentials.username,
        this.credentials.password
      );

      if (result.success) {
        this.router.navigate(['/admin']);
      } else {
        this.errorMessage = result.message;
      }
    } catch (error) {
      this.errorMessage = 'An unexpected error occurred. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }
}
