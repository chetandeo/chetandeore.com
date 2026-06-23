import { Component, OnInit } from '@angular/core';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'cdeore20@gmail.com',
      link: 'mailto:cdeore20@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/cdeore',
      link: 'https://www.linkedin.com/in/cdeore/'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91-9503002981',
      link: 'tel:+919503002981'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/chetandeo',
      link: 'https://github.com/chetandeo'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Pune, MH, India'
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}
