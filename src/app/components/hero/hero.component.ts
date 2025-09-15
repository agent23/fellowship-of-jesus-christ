import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private router: Router) {}

  stats = [
    { number: '500+', label: 'Members' },
    { number: '25+', label: 'Years Serving' },
    { number: '15+', label: 'Ministries' },
    { number: '1200+', label: 'Lives Changed' }
  ];

  particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  }));

  bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: i * 0.2,
    duration: 4 + (i % 4),
    size: 10 + (i % 20)
  }));

  getStatIcon(index: number): string {
    const icons = ['👥', '⛪', '🤝', '✨'];
    return icons[index] || '✨';
  }

  onJoinUs(): void {
    // Navigate to contact page
    this.router.navigate(['/contact']);
  }

  onWatchLive(): void {
    // Open live stream or navigate to services
    console.log('Watch Live clicked');
  }
}
