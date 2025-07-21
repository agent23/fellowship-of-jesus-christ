import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

export interface ArchiveDocument {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'document' | 'audio' | 'video' | 'image';
  fileUrl: string;
  thumbnailUrl?: string;
  uploadDate: Date;
  size: string;
  tags: string[];
  author?: string;
  year: number;
}

export interface ArchiveCategory {
  name: string;
  description: string;
  icon: string;
  count: number;
}

@Component({
  selector: 'app-archives',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    FormsModule
  ],
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss'
})
export class ArchivesComponent {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedType: string = 'all';
  selectedYear: string = 'all';

  categories: ArchiveCategory[] = [
    { name: 'sermons', description: 'Sunday sermons and teachings', icon: 'record_voice_over', count: 25 },
    { name: 'newsletters', description: 'Monthly church newsletters', icon: 'newspaper', count: 12 },
    { name: 'events', description: 'Past event photos and videos', icon: 'event', count: 18 },
    { name: 'meetings', description: 'Board and committee meeting minutes', icon: 'meeting_room', count: 8 },
    { name: 'bulletins', description: 'Weekly service bulletins', icon: 'description', count: 52 },
    { name: 'reports', description: 'Annual reports and financial statements', icon: 'assessment', count: 5 },
    { name: 'history', description: 'Church history and historical documents', icon: 'history_edu', count: 15 },
    { name: 'music', description: 'Choir performances and music', icon: 'music_note', count: 20 }
  ];

  types = ['all', 'document', 'audio', 'video', 'image'];
  years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', 'Older'];

  archives: ArchiveDocument[] = [
    // Sermons
    {
      id: 1,
      title: 'Walking in Faith - Complete Series',
      description: 'A comprehensive 6-part sermon series on faith and trust in God during difficult times.',
      category: 'sermons',
      type: 'audio',
      fileUrl: '#',
      uploadDate: new Date('2024-01-15'),
      size: '245 MB',
      tags: ['faith', 'series', 'audio'],
      author: 'Pastor Michael Johnson',
      year: 2024
    },
    {
      id: 2,
      title: 'Christmas Eve Service 2023',
      description: 'Complete recording of our beautiful Christmas Eve candlelight service.',
      category: 'sermons',
      type: 'video',
      fileUrl: '#',
      thumbnailUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      uploadDate: new Date('2023-12-24'),
      size: '1.2 GB',
      tags: ['christmas', 'service', 'video'],
      author: 'Pastor Michael Johnson',
      year: 2023
    },
    // Newsletters
    {
      id: 3,
      title: 'Fellowship Focus - January 2024',
      description: 'Monthly newsletter featuring upcoming events, ministry updates, and community news.',
      category: 'newsletters',
      type: 'document',
      fileUrl: '#',
      uploadDate: new Date('2024-01-01'),
      size: '2.1 MB',
      tags: ['newsletter', 'monthly', 'updates'],
      year: 2024
    },
    {
      id: 4,
      title: 'Fellowship Focus - December 2023',
      description: 'Year-end newsletter with annual report highlights and holiday event coverage.',
      category: 'newsletters',
      type: 'document',
      fileUrl: '#',
      uploadDate: new Date('2023-12-01'),
      size: '2.5 MB',
      tags: ['newsletter', 'annual report', 'holidays'],
      year: 2023
    },
    // Events
    {
      id: 5,
      title: 'Youth Winter Retreat 2024 Photos',
      description: 'Photo collection from our amazing youth winter retreat weekend.',
      category: 'events',
      type: 'image',
      fileUrl: '#',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      uploadDate: new Date('2024-01-20'),
      size: '156 MB',
      tags: ['youth', 'retreat', 'photos'],
      year: 2024
    },
    {
      id: 6,
      title: 'Community Outreach Day Highlights',
      description: 'Video highlights from our community service day serving local families.',
      category: 'events',
      type: 'video',
      fileUrl: '#',
      thumbnailUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      uploadDate: new Date('2023-11-15'),
      size: '425 MB',
      tags: ['outreach', 'community', 'service'],
      year: 2023
    },
    // History
    {
      id: 7,
      title: 'Church Foundation Documents (1952)',
      description: 'Original church charter, founding documents, and early congregation records.',
      category: 'history',
      type: 'document',
      fileUrl: '#',
      uploadDate: new Date('2023-08-01'),
      size: '15.3 MB',
      tags: ['founding', 'charter', 'historical'],
      year: 1952
    },
    {
      id: 8,
      title: '70th Anniversary Celebration',
      description: 'Complete photo and video collection from our 70th anniversary celebration.',
      category: 'history',
      type: 'video',
      fileUrl: '#',
      thumbnailUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      uploadDate: new Date('2022-09-15'),
      size: '890 MB',
      tags: ['anniversary', 'celebration', 'milestone'],
      year: 2022
    },
    // Music
    {
      id: 9,
      title: 'Easter Choir Performance 2023',
      description: 'Beautiful choir performance of Easter hymns and contemporary worship songs.',
      category: 'music',
      type: 'audio',
      fileUrl: '#',
      uploadDate: new Date('2023-04-09'),
      size: '85 MB',
      tags: ['choir', 'easter', 'worship'],
      year: 2023
    },
    // Reports
    {
      id: 10,
      title: 'Annual Report 2023',
      description: 'Complete annual report including ministry highlights, financial summary, and growth statistics.',
      category: 'reports',
      type: 'document',
      fileUrl: '#',
      uploadDate: new Date('2024-01-31'),
      size: '5.2 MB',
      tags: ['annual', 'financial', 'statistics'],
      year: 2023
    }
  ];

  get filteredArchives(): ArchiveDocument[] {
    let filtered = [...this.archives];

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(archive => archive.category === this.selectedCategory);
    }

    if (this.selectedType !== 'all') {
      filtered = filtered.filter(archive => archive.type === this.selectedType);
    }

    if (this.selectedYear !== 'all') {
      if (this.selectedYear === 'Older') {
        filtered = filtered.filter(archive => archive.year < 2019);
      } else {
        filtered = filtered.filter(archive => archive.year.toString() === this.selectedYear);
      }
    }

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(archive => 
        archive.title.toLowerCase().includes(term) ||
        archive.description.toLowerCase().includes(term) ||
        archive.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    return filtered.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
  }

  get categoryStats(): ArchiveCategory[] {
    return this.categories.map(category => ({
      ...category,
      count: this.archives.filter(archive => archive.category === category.name).length
    }));
  }

  getFileIcon(type: string): string {
    switch (type) {
      case 'document': return 'description';
      case 'audio': return 'audiotrack';
      case 'video': return 'videocam';
      case 'image': return 'image';
      default: return 'insert_drive_file';
    }
  }

  getFileColor(type: string): string {
    switch (type) {
      case 'document': return '#1e88e5';
      case 'audio': return '#43a047';
      case 'video': return '#e53935';
      case 'image': return '#fb8c00';
      default: return '#757575';
    }
  }

  downloadFile(archive: ArchiveDocument): void {
    // In a real app, this would initiate the download
    console.log('Downloading:', archive.title);
  }

  previewFile(archive: ArchiveDocument): void {
    // In a real app, this would open a preview modal
    console.log('Previewing:', archive.title);
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedType = 'all';
    this.selectedYear = 'all';
  }
}
