import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  upcomingEvents = [
    {
      title: 'Sunday Worship Service',
      date: '2025-07-27',
      time: '10:00 AM',
      description: 'Join us for our weekly worship and fellowship'
    },
    {
      title: 'Youth Bible Study',
      date: '2025-07-30',
      time: '7:00 PM',
      description: 'Interactive Bible study for teens and young adults'
    },
    {
      title: 'Community Outreach',
      date: '2025-08-03',
      time: '9:00 AM',
      description: 'Serving our local community with love'
    }
  ];

  quickLinks = [
    { title: 'Our Beliefs', route: '/about', icon: 'auto_stories' },
    { title: 'Service Times', route: '/services', icon: 'schedule' },
    { title: 'Get Involved', route: '/events', icon: 'volunteer_activism' },
    { title: 'Contact Us', route: '/contact', icon: 'contact_mail' }
  ];
}
