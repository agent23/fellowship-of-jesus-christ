import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  sermons = [
    {
      title: 'Walking in Faith During Difficult Times',
      date: '2025-09-08',
      pastor: 'Pastor Chabalala Manyokole',
      description: 'Finding strength and hope through God\'s promises when life gets challenging.',
      videoUrl: '#',
      audioUrl: '#'
    },
    {
      title: 'The Power of Community Prayer',
      date: '2025-09-01',
      pastor: 'Bishop Moalosi Kobeli',
      description: 'Discovering how praying together strengthens our faith and builds unity.',
      videoUrl: '#',
      audioUrl: '#'
    },
    {
      title: 'Living with Purpose and Joy',
      date: '2025-08-25',
      pastor: 'Pastor M Masoenyane',
      description: 'Understanding God\'s calling in our daily lives and finding joy in service.',
      videoUrl: '#',
      audioUrl: '#'
    }
  ];

  blogPosts = [
    {
      title: 'Preparing Hearts for the Holidays',
      date: '2025-09-05',
      author: 'Ministry Team',
      excerpt: 'As we approach the holiday season, let\'s focus on preparing our hearts for worship and celebration.',
      readTime: '3 min read'
    },
    {
      title: 'Youth Ministry Update: Fall Activities',
      date: '2025-08-30',
      author: 'Youth Pastor Mohale',
      excerpt: 'Exciting new programs and activities planned for our youth this fall season.',
      readTime: '2 min read'
    }
  ];
}
