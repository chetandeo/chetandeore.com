import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

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

  submitting = false;
  successMessage = '';
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.submitting) return;

    this.successMessage = '';
    this.errorMessage = '';

    // Web3Forms endpoint
    const accessKey = environment.web3formsAccessKey || '';
    if (!accessKey) {
      this.errorMessage = 'Missing Web3Forms access key. Add it to environment files.';
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
        this.successMessage = 'Thank you — your message has been sent.';
        this.resetForm();
      } else {
        this.errorMessage = json.message || 'Submission failed — please try again later.';
      }
    } catch (err: any) {
      this.errorMessage = err?.message || 'Network error — please try again later.';
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
