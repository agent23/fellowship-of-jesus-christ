import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { AuthService, AdminUser } from '../../services/auth.service';
import { Router } from '@angular/router';

export interface DashboardStats {
  totalMembers: number;
  weeklyAttendance: number;
  monthlyDonations: number;
  activeEvents: number;
  newMembersThisMonth: number;
  blogPosts: number;
  archivedDocuments: number;
  upcomingEvents: number;
}

export interface RecentActivity {
  id: number;
  type: 'member' | 'donation' | 'event' | 'blog' | 'archive';
  description: string;
  timestamp: Date;
  user?: string;
}

export interface ContentItem {
  id: number;
  title: string;
  type: 'blog' | 'event' | 'announcement' | 'archive';
  status: 'draft' | 'published' | 'archived';
  author: string;
  createdDate: Date;
  publishDate?: Date;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressBarModule,
    FormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  currentUser: AdminUser | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = this.authService.getCurrentUser();
    
    // If not logged in, redirect to login
    if (!this.currentUser) {
      this.router.navigate(['/admin/login']);
      return;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  hasPermission(permission: string): boolean {
    return this.authService.hasPermission(permission);
  }
  
  // Dashboard Statistics
  stats: DashboardStats = {
    totalMembers: 342,
    weeklyAttendance: 287,
    monthlyDonations: 12850,
    activeEvents: 8,
    newMembersThisMonth: 12,
    blogPosts: 45,
    archivedDocuments: 156,
    upcomingEvents: 6
  };

  // Recent Activity
  recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: 'member',
      description: 'New member registration: Sarah Johnson',
      timestamp: new Date('2024-01-15T10:30:00'),
      user: 'System'
    },
    {
      id: 2,
      type: 'blog',
      description: 'New blog post published: "Walking in Faith"',
      timestamp: new Date('2024-01-15T09:15:00'),
      user: 'Pastor Michael'
    },
    {
      id: 3,
      type: 'event',
      description: 'Youth Winter Retreat registration opened',
      timestamp: new Date('2024-01-14T16:45:00'),
      user: 'David Chen'
    },
    {
      id: 4,
      type: 'donation',
      description: 'Online donation received: $250.00',
      timestamp: new Date('2024-01-14T14:20:00'),
      user: 'Anonymous'
    },
    {
      id: 5,
      type: 'archive',
      description: 'Christmas 2023 photos uploaded to archives',
      timestamp: new Date('2024-01-13T11:30:00'),
      user: 'Sarah Williams'
    }
  ];

  // Content Management
  contentItems: ContentItem[] = [
    {
      id: 1,
      title: 'Walking in Faith: A Journey of Trust',
      type: 'blog',
      status: 'published',
      author: 'Pastor Michael Johnson',
      createdDate: new Date('2024-01-10'),
      publishDate: new Date('2024-01-15')
    },
    {
      id: 2,
      title: 'Youth Winter Retreat 2024',
      type: 'event',
      status: 'published',
      author: 'David Chen',
      createdDate: new Date('2024-01-08'),
      publishDate: new Date('2024-01-12')
    },
    {
      id: 3,
      title: 'New Member Class Announcement',
      type: 'announcement',
      status: 'published',
      author: 'Jennifer Martinez',
      createdDate: new Date('2024-01-05'),
      publishDate: new Date('2024-01-10')
    },
    {
      id: 4,
      title: 'Easter Service Planning',
      type: 'blog',
      status: 'draft',
      author: 'Pastor Michael Johnson',
      createdDate: new Date('2024-01-12')
    },
    {
      id: 5,
      title: 'Annual Report 2023',
      type: 'archive',
      status: 'published',
      author: 'Mary Roberts',
      createdDate: new Date('2023-12-20'),
      publishDate: new Date('2024-01-01')
    }
  ];

  // Upload management
  uploadProgress: number = 0;
  isUploading: boolean = false;

  displayedColumns: string[] = ['title', 'type', 'status', 'author', 'created', 'actions'];

  getActivityIcon(type: string): string {
    switch (type) {
      case 'member': return 'person_add';
      case 'donation': return 'attach_money';
      case 'event': return 'event';
      case 'blog': return 'article';
      case 'archive': return 'folder';
      default: return 'info';
    }
  }

  getActivityColor(type: string): string {
    switch (type) {
      case 'member': return '#4caf50';
      case 'donation': return '#ff9800';
      case 'event': return '#2196f3';
      case 'blog': return '#9c27b0';
      case 'archive': return '#607d8b';
      default: return '#666';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'published': return 'primary';
      case 'draft': return 'warn';
      case 'archived': return '';
      default: return '';
    }
  }

  editContent(item: ContentItem): void {
    console.log('Editing content:', item.title);
    // In a real app, this would open an edit dialog
  }

  deleteContent(item: ContentItem): void {
    console.log('Deleting content:', item.title);
    // In a real app, this would show a confirmation dialog
  }

  publishContent(item: ContentItem): void {
    console.log('Publishing content:', item.title);
    item.status = 'published';
    item.publishDate = new Date();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate file upload progress
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.isUploading = false;
        this.uploadProgress = 0;
        console.log('File uploaded successfully:', file.name);
        // In a real app, this would handle the actual upload
      }
    }, 200);
  }

  exportData(type: string): void {
    console.log('Exporting data:', type);
    // In a real app, this would generate and download the export
  }

  generateReport(type: string): void {
    console.log('Generating report:', type);
    // In a real app, this would generate the requested report
  }
}
