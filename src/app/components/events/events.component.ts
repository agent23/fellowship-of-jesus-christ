import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  upcomingEvents = [
    {
      id: 1,
      title: 'Sunday Morning Worship',
      date: '2025-07-27',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'Join us for our weekly worship service featuring traditional hymns, inspiring message, and communion.',
      type: 'Weekly Service',
      recurring: true
    },
    {
      id: 2,
      title: 'Youth Bible Study',
      date: '2025-07-30',
      time: '7:00 PM',
      location: 'Youth Room',
      description: 'Interactive Bible study designed for teens and young adults. Pizza and fellowship included!',
      type: 'Bible Study',
      recurring: true
    },
    {
      id: 3,
      title: 'Community Outreach Day',
      date: '2025-08-03',
      time: '9:00 AM',
      location: 'Various Locations',
      description: 'Join us as we serve our local community through food distribution, cleanup projects, and visiting seniors.',
      type: 'Outreach',
      recurring: false
    },
    {
      id: 4,
      title: 'Summer Church Picnic',
      date: '2025-08-10',
      time: '12:00 PM',
      location: 'Community Park',
      description: 'Annual church picnic with games, food, and fellowship for the whole family.',
      type: 'Fellowship',
      recurring: false
    },
    {
      id: 5,
      title: 'Prayer and Worship Night',
      date: '2025-08-15',
      time: '7:30 PM',
      location: 'Main Sanctuary',
      description: 'An evening dedicated to prayer, worship, and seeking God\'s presence together.',
      type: 'Worship',
      recurring: false
    }
  ];

  pastEvents = [
    {
      id: 6,
      title: 'VBS 2025 - Ocean Adventure',
      date: '2025-07-15',
      time: '9:00 AM - 12:00 PM',
      location: 'Fellowship Hall',
      description: 'Amazing week of Vacation Bible School with over 50 kids learning about God\'s love.',
      type: 'Children\'s Ministry',
      photos: ['vbs1.jpg', 'vbs2.jpg', 'vbs3.jpg']
    },
    {
      id: 7,
      title: 'Men\'s Retreat Weekend',
      date: '2025-06-28',
      time: 'Friday 6 PM - Sunday 2 PM',
      location: 'Mountain View Camp',
      description: 'Powerful weekend of fellowship, teaching, and spiritual growth for men.',
      type: 'Retreat',
      photos: ['retreat1.jpg', 'retreat2.jpg']
    }
  ];

  weeklySchedule = [
    { day: 'Sunday', events: ['10:00 AM - Morning Worship', '6:00 PM - Evening Service'] },
    { day: 'Monday', events: ['7:00 PM - Board Meeting (1st Monday)'] },
    { day: 'Tuesday', events: ['10:00 AM - Women\'s Bible Study', '7:00 PM - Adult Choir Practice'] },
    { day: 'Wednesday', events: ['7:00 PM - Midweek Bible Study', '7:00 PM - Youth Group'] },
    { day: 'Thursday', events: ['6:30 PM - Small Groups (Various Locations)'] },
    { day: 'Friday', events: ['6:30 PM - Youth Ministry'] },
    { day: 'Saturday', events: ['9:00 AM - Men\'s Prayer Breakfast (2nd Saturday)'] }
  ];

  getEventTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'Weekly Service': 'primary',
      'Bible Study': 'accent',
      'Outreach': 'warn',
      'Fellowship': 'primary',
      'Worship': 'accent',
      'Children\'s Ministry': 'primary',
      'Retreat': 'warn'
    };
    return colors[type] || 'primary';
  }
}
