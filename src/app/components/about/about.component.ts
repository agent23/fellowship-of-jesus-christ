import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  missionValues = [
    {
      icon: '🙏',
      title: 'Worship Together',
      description: 'Experience meaningful worship through contemporary music, heartfelt prayer, and biblically-grounded sermons that inspire and challenge us to grow.'
    },
    {
      icon: '❤️',
      title: 'Love & Serve',
      description: 'Share Christ\'s love through community outreach, missions, and service projects that make a real difference in people\'s lives.'
    },
    {
      icon: '✨',
      title: 'Grow in Faith',
      description: 'Deepen your relationship with God through Bible study, small groups, discipleship programs, and spiritual mentorship.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Build Community',
      description: 'Create lasting friendships and find your church family through fellowship events, life groups, and shared experiences.'
    }
  ];
}
