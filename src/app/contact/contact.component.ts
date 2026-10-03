import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
  actionText?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailCopied = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email Address',
      value: 'cdeore20@gmail.com',
      link: 'mailto:cdeore20@gmail.com?subject=Senior%20Engineering%20Opportunity',
      actionText: 'Send Email ↗'
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Direct Phone / WhatsApp',
      value: '+91 9503002981',
      link: 'tel:+919503002981',
      actionText: 'Call Now ↗'
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/cdeore',
      link: 'https://www.linkedin.com/in/cdeore/',
      actionText: 'Connect ↗'
    },
    {
      icon: 'fa-brands fa-github',
      title: 'GitHub Repositories',
      value: 'github.com/chetandeo',
      link: 'https://github.com/chetandeo',
      actionText: 'Follow ↗'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Location & Availability',
      value: 'Pune, Maharashtra, India (Open to Remote / Hybrid / Relocation)',
      actionText: 'Worldwide'
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitting = false;
  successMessage = '';
  errorMessage = '';

  constructor() { }

  ngOnInit(): void { }

  copyEmail(): void {
    const email = 'cdeore20@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.emailCopied = true;
        setTimeout(() => (this.emailCopied = false), 2500);
      });
    } else {
      this.emailCopied = true;
      setTimeout(() => (this.emailCopied = false), 2500);
    }
  }

  async onSubmit() {
    if (this.submitting) return;

    this.successMessage = '';
    this.errorMessage = '';

    const accessKey = (environment as any).web3formsAccessKey || '';
    if (!accessKey) {
      // Graceful fallback to direct mailto
      window.location.href = `mailto:cdeore20@gmail.com?subject=${encodeURIComponent(this.formData.subject || 'Engineering Inquiry')}&body=${encodeURIComponent(`Hi Chetan,\n\n${this.formData.message}\n\nFrom: ${this.formData.name} (${this.formData.email})`)}`;
      return;
    }

    this.submitting = true;
    try {
      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('name', this.formData.name || '');
      formData.append('email', this.formData.email || '');
      formData.append('subject', this.formData.subject || '');
      formData.append('message', this.formData.message || '');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const json = await res.json();

      if (res.ok && json.success) {
        this.successMessage = 'Thank you! Your message has been sent successfully. I will get back to you shortly.';
        this.resetForm();
      } else {
        this.errorMessage = json.message || 'Submission failed — please try again later or email directly.';
      }
    } catch (err: any) {
      this.errorMessage = err?.message || 'Network error — please try again later or email directly.';
    } finally {
      this.submitting = false;
    }
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
