import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-giving',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './giving.component.html',
  styleUrl: './giving.component.scss'
})
export class GivingComponent {
  bankingDetails = {
    bankName: 'First National Bank',
    accountName: 'Fellowship of Jesus Christ',
    accountNumber: '1234567890',
    routingNumber: '987654321',
    swiftCode: 'FNBCUS33',
    reference: 'Donation - [Your Name]'
  };

  givingOptions = [
    {
      title: 'Tithe & Offerings',
      description: 'Regular giving to support church operations and ministries',
      icon: '💰',
      purpose: 'General Fund'
    },
    {
      title: 'Building Fund',
      description: 'Support for church building maintenance and improvements',
      icon: '🏛️',
      purpose: 'Building Fund'
    },
    {
      title: 'Missions Support',
      description: 'Support our global missionary efforts and outreach programs',
      icon: '🌍',
      purpose: 'Missions'
    },
    {
      title: 'Youth Ministry',
      description: 'Support programs and activities for our young people',
      icon: '👥',
      purpose: 'Youth Ministry'
    },
    {
      title: 'Community Outreach',
      description: 'Support local community service and charity programs',
      icon: '❤️',
      purpose: 'Community Outreach'
    },
    {
      title: 'Special Events',
      description: 'Support special church events and celebrations',
      icon: '🎉',
      purpose: 'Special Events'
    }
  ];

  verses = [
    {
      text: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
      reference: "2 Corinthians 9:7"
    },
    {
      text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.",
      reference: "Malachi 3:10"
    },
    {
      text: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.",
      reference: "Proverbs 3:9-10"
    }
  ];

  copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      console.log(`${field} copied to clipboard`);
    });
  }
}
