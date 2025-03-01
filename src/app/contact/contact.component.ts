import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div id="contact">
      <div class="contact-container">
        <div class="contact-left">
          <h1 class="sub-title">Me contacter</h1>
          <p><i class="fa-solid fa-paper-plane"></i> kandji.mouhamed&#64;icloud.com</p>
          <p><i class="fa-solid fa-phone"></i> +33 (0) 7 65 71 76 18</p>
          <div class="social">
            <a href="https://www.linkedin.com/in/mouhamed-kandji-a44196304/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/moKandji?tab=repositories">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="assets/CV_stage_KANDJIMouhamed.pdf" download class="cv cv2">Télécharger mon CV</a>
        </div>
        
        <div class="contact-right">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <input type="text" formControlName="name" placeholder="Votre Nom*" required>
            <input type="email" formControlName="email" placeholder="Votre email*" required>
            <textarea formControlName="message" rows="6" placeholder="Votre Message"></textarea>
            <button type="submit" class="cv cv2" [disabled]="loading">
              {{ loading ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </form>
          <p *ngIf="msg" [ngClass]="{'success-message': success, 'error-message': !success}">
            {{ msg }}
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private emailServiceID = 'service_xskt26j';
  private emailTemplateID = 'template_ysb348b';
  private emailPublicKey = 'e8ETK7w3-vLTBFp6E';

  contactForm: FormGroup = inject(FormBuilder).group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  msg: string = '';
  success: boolean = false;
  loading: boolean = false;

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendEmail();
    } else {
      this.msg = "❌ Veuillez remplir tous les champs obligatoires.";
      this.success = false;
      setTimeout(() => { this.msg = ''; }, 5000);
    }
  }

  private sendEmail(): void {
    this.loading = true;

    const formData = {
      to_name: "Mouhamed Kandji",
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    emailjs.send(this.emailServiceID, this.emailTemplateID, formData, this.emailPublicKey)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        this.msg = "✅ Message envoyé avec succès !";
        this.success = true;
        this.contactForm.reset();
      })
      .catch(error => {
        console.error('FAILED...', error);
        this.msg = "❌ Une erreur s'est produite. Veuillez réessayer.";
        this.success = false;
      })
      .finally(() => {
        this.loading = false;
        setTimeout(() => { this.msg = ''; }, 5000);
      });
  }
}

// service_id : service_xskt26j

// template_id : template_u21w1yb

// public_key : e8ETK7w3-vLTBFp6E