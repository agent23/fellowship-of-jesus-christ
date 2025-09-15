import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ministries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ministries.component.html',
  styleUrl: './ministries.component.scss'
})
export class MinistriesComponent {
  ministries = [
    {
      icon: '👶',
      title: 'Children\'s Ministry',
      description: 'Nursery through 5th grade programs with age-appropriate lessons, games, and activities.',
      details: ['Ages: 0-11', 'Sundays 10:00 AM']
    },
    {
      icon: '🎓',
      title: 'Youth Ministry',
      description: 'Dynamic programs for teens including Bible study, mission trips, and fun activities.',
      details: ['Ages: 12-18', 'Saturdays 3:00 PM']
    },
    {
      icon: '👥',
      title: 'Adult Small Groups',
      description: 'Life-stage focused groups for deeper relationships and spiritual growth.',
      details: ['All Ages', 'Various Times']
    },
    {
      icon: '🎵',
      title: 'Worship Ministry',
      description: 'Choir, praise band, and special music ministry opportunities for all skill levels.',
      details: ['All Ages', 'Wed 7:30 PM']
    },
    {
      icon: '🤝',
      title: 'Community Outreach',
      description: 'Food pantry, homeless ministry, and local service projects.',
      details: ['Volunteers', 'Monthly Events']
    },
    {
      icon: '👵',
      title: 'Senior Ministry',
      description: 'Fellowship, Bible study, and special events for our seasoned saints.',
      details: ['Ages: 65+', '2nd Thursdays']
    }
  ];
}
