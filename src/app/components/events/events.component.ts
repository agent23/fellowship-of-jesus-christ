import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  upcomingEvents = [
    {
      id: 1,
      title: 'Prayer Meeting',
      date: '2025-09-13',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for our weekly prayer meeting where we come together to pray for our community and world.',
      category: 'prayer'
    },
    {
      id: 2,
      title: 'Youth Group',
      date: '2025-09-14',
      time: '6:00 PM',
      location: 'Youth Center',
      description: 'Fun, fellowship, and faith-building activities for teens ages 13-18.',
      category: 'youth'
    },
    {
      id: 3,
      title: 'Community Outreach',
      date: '2025-09-15',
      time: '9:00 AM',
      location: 'Downtown Community Center',
      description: 'Serving meals and providing support to those in need in our community.',
      category: 'outreach'
    },
    {
      id: 4,
      title: 'Bible Study',
      date: '2025-09-16',
      time: '7:30 PM',
      location: 'Fellowship Hall',
      description: 'Deep dive into Scripture with discussion and fellowship.',
      category: 'study'
    }
  ];

  categories = [
    { name: 'All Events', value: 'all', active: true },
    { name: 'Prayer', value: 'prayer', active: false },
    { name: 'Youth', value: 'youth', active: false },
    { name: 'Outreach', value: 'outreach', active: false },
    { name: 'Study', value: 'study', active: false }
  ];

  filterByCategory(category: string) {
    this.categories.forEach(cat => cat.active = cat.value === category);
  }

  get filteredEvents() {
    const activeCategory = this.categories.find(cat => cat.active);
    if (!activeCategory || activeCategory.value === 'all') {
      return this.upcomingEvents;
    }
    return this.upcomingEvents.filter(event => event.category === activeCategory.value);
  }
}
