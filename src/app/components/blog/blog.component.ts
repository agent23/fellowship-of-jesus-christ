import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  readTime: string;
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
  type: 'general' | 'urgent' | 'event' | 'prayer';
  publishDate: Date;
  expiryDate?: Date;
  pinned: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    FormsModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  searchTerm: string = '';
  selectedCategory: string = 'all';

  categories = ['all', 'sermon', 'community', 'ministry', 'testimony', 'youth'];

  featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Walking in Faith: A Journey of Trust',
      excerpt: 'In times of uncertainty, faith becomes our anchor. Join us as we explore what it means to truly walk in faith and trust in God\'s plan.',
      content: 'Full article content would go here...',
      author: 'Pastor Michael Johnson',
      publishDate: new Date('2024-01-15'),
      category: 'sermon',
      tags: ['faith', 'trust', 'spiritual growth'],
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Community Outreach: Making a Difference',
      excerpt: 'Our recent community outreach event touched the lives of over 200 families. See how our church family is making a real impact.',
      content: 'Full article content would go here...',
      author: 'Sarah Williams',
      publishDate: new Date('2024-01-12'),
      category: 'community',
      tags: ['outreach', 'community service', 'impact'],
      featured: true,
      imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    }
  ];

  recentPosts: BlogPost[] = [
    {
      id: 3,
      title: 'Youth Ministry: Growing in Grace',
      excerpt: 'Our youth ministry continues to flourish with exciting new programs and activities designed to help young people grow in their faith.',
      content: 'Full article content would go here...',
      author: 'David Chen',
      publishDate: new Date('2024-01-10'),
      category: 'youth',
      tags: ['youth', 'ministry', 'growth'],
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Prayer Changes Everything',
      excerpt: 'Testimonies from our prayer ministry showing how God continues to work miracles in our church family.',
      content: 'Full article content would go here...',
      author: 'Mary Roberts',
      publishDate: new Date('2024-01-08'),
      category: 'testimony',
      tags: ['prayer', 'miracles', 'testimony'],
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'The Power of Worship',
      excerpt: 'Exploring how worship transforms our hearts and connects us with God in profound ways.',
      content: 'Full article content would go here...',
      author: 'Pastor Michael Johnson',
      publishDate: new Date('2024-01-05'),
      category: 'sermon',
      tags: ['worship', 'transformation', 'connection'],
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Building Stronger Families',
      excerpt: 'Join us for our family ministry workshop series focusing on biblical principles for stronger, healthier families.',
      content: 'Full article content would go here...',
      author: 'Jennifer Martinez',
      publishDate: new Date('2024-01-03'),
      category: 'ministry',
      tags: ['family', 'relationships', 'workshop'],
      featured: false,
      imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '5 min read'
    }
  ];

  announcements: Announcement[] = [
    {
      id: 1,
      title: 'New Member Class Starting February 1st',
      content: 'Join us for our new member orientation class starting February 1st at 7 PM. This is a great opportunity to learn more about our church family and find your place in ministry.',
      type: 'general',
      publishDate: new Date('2024-01-15'),
      expiryDate: new Date('2024-02-01'),
      pinned: true
    },
    {
      id: 2,
      title: 'Prayer Request: Johnson Family',
      content: 'Please keep the Johnson family in your prayers as they navigate through a difficult health situation. Your prayers and support are greatly appreciated.',
      type: 'prayer',
      publishDate: new Date('2024-01-14'),
      pinned: false
    },
    {
      id: 3,
      title: 'Church Building Maintenance - January 20th',
      content: 'The church building will be closed on January 20th for scheduled maintenance. All services will be held in the fellowship hall.',
      type: 'urgent',
      publishDate: new Date('2024-01-12'),
      expiryDate: new Date('2024-01-21'),
      pinned: true
    },
    {
      id: 4,
      title: 'Youth Winter Retreat Registration Open',
      content: 'Registration is now open for our annual youth winter retreat! Join us February 16-18 for a weekend of fellowship, worship, and fun.',
      type: 'event',
      publishDate: new Date('2024-01-10'),
      expiryDate: new Date('2024-02-10'),
      pinned: false
    }
  ];

  get filteredPosts(): BlogPost[] {
    let posts = [...this.featuredPosts, ...this.recentPosts];
    
    if (this.selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === this.selectedCategory);
    }
    
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    return posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  }

  get pinnedAnnouncements(): Announcement[] {
    return this.announcements.filter(announcement => announcement.pinned);
  }

  get regularAnnouncements(): Announcement[] {
    return this.announcements.filter(announcement => !announcement.pinned);
  }

  getAnnouncementIcon(type: string): string {
    switch (type) {
      case 'urgent': return 'warning';
      case 'event': return 'event';
      case 'prayer': return 'favorite';
      default: return 'info';
    }
  }

  getAnnouncementColor(type: string): string {
    switch (type) {
      case 'urgent': return 'warn';
      case 'event': return 'accent';
      case 'prayer': return 'primary';
      default: return '';
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  readPost(post: BlogPost): void {
    // In a real app, this would navigate to the full post
    console.log('Reading post:', post.title);
  }
}
