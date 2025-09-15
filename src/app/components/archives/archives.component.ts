import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss'
})
export class ArchivesComponent {
  newsletters = [
    {
      title: 'September 2025 Newsletter',
      date: '2025-09-01',
      description: 'Fall activities, upcoming events, and community updates for September.',
      downloadUrl: '#',
      featured: true
    },
    {
      title: 'August 2025 Newsletter',
      date: '2025-08-01',
      description: 'Summer ministry highlights and back-to-school preparations.',
      downloadUrl: '#',
      featured: false
    },
    {
      title: 'July 2025 Newsletter',
      date: '2025-07-01',
      description: 'VBS recap, summer outreach programs, and July events.',
      downloadUrl: '#',
      featured: false
    },
    {
      title: 'June 2025 Newsletter',
      date: '2025-06-01',
      description: 'Graduate recognition, summer activities, and ministry updates.',
      downloadUrl: '#',
      featured: false
    }
  ];

  prayerRequests = [
    {
      category: 'Health & Healing',
      description: 'Pray for church members recovering from illness and surgery.',
      date: '2025-09-10'
    },
    {
      category: 'Community Outreach',
      description: 'Pray for our upcoming food drive and community service projects.',
      date: '2025-09-08'
    },
    {
      category: 'Global Missions',
      description: 'Pray for our missionary families serving around the world.',
      date: '2025-09-05'
    },
    {
      category: 'Church Growth',
      description: 'Pray for new families joining our fellowship and spiritual growth.',
      date: '2025-09-01'
    }
  ];

  announcements = [
    {
      title: 'New Member Class',
      content: 'Starting September 20th - Learn about our church family and membership.',
      priority: 'high',
      date: '2025-09-11'
    },
    {
      title: 'Fall Festival Planning',
      content: 'Volunteers needed for our annual Fall Festival on October 15th.',
      priority: 'medium',
      date: '2025-09-09'
    },
    {
      title: 'Children\'s Ministry Update',
      content: 'New curriculum starting this month for all Sunday School classes.',
      priority: 'low',
      date: '2025-09-07'
    }
  ];
}
