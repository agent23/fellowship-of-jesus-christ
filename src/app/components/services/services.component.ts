import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      day: 'Sunday',
      time: '10:00 AM',
      title: 'Traditional Service',
      description: 'Classic hymns, liturgical worship, and timeless traditions. Perfect for those who love traditional church atmosphere.',
      features: ['• Organ & Choir', '• Communion Monthly', '• 60 minutes'],
      featured: false,
      liveStream: false
    },
    {
      day: 'Sunday',
      time: '11:00 AM',
      title: 'Contemporary Service',
      description: 'Modern worship with live band, interactive elements, and engaging messages for the whole family.',
      features: ['• Live Band', '• Children\'s Ministry', '• 75 minutes'],
      featured: true,
      liveStream: true
    },
    {
      day: 'Wednesday',
      time: '7:00 PM',
      title: 'Bible Study & Prayer',
      description: 'Deep dive into God\'s word with interactive discussion, prayer, and fellowship in a casual setting.',
      features: ['• Small Groups', '• Discussion Based', '• Light Refreshments'],
      featured: false,
      liveStream: false
    }
  ];
}
