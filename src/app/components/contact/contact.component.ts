import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false
  };

  interests = [
    { value: '', label: 'Select an option' },
    { value: 'visiting', label: 'Visiting for the first time' },
    { value: 'membership', label: 'Church membership' },
    { value: 'ministries', label: 'Getting involved in ministries' },
    { value: 'baptism', label: 'Baptism' },
    { value: 'prayer', label: 'Prayer request' },
    { value: 'other', label: 'Other' }
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
      newsletter: false
    };
  }
}
