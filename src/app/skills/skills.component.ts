import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `<section id="skills">
    <div class="container">
      <h1 class="sub-title">Mes compétences</h1>
      <div class="skills-list">
        <div *ngFor="let skill of skills" class="skill-card">
          <i [class]="skill.icon"></i>
          <h2>{{ skill.title }}</h2>
          <p *ngFor="let desc of skill.descriptions">{{ desc }}</p>
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      icon: 'fa-solid fa-tasks',
      title: 'Gestion de projet',
      descriptions: [
        'Planification, suivi des livrables & relation client'
      ]
    },
    {
      icon: 'fa-solid fa-project-diagram',
      title: 'Conception',
      descriptions: [
        'UML : Use case, diagramme de classes, séquences & activité'
      ]
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Logiciel',
      descriptions: [
        'Techno : .NET',
        'Domaine : RH',
        'Conception avancée : Clean architecture & Design Patterns'
      ]
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Web',
      descriptions: [
        'Frameworks : Angular, React, Vue.js & ASP.NET Core'
      ]
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Données',
      descriptions: [
        'Langages : SQL, R, Python & VBA',
        'Bibliothèques : Pandas, Numpy & Matplotlib'
      ]
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: 'Sécurité',
      descriptions: [
        'Cybersécurité : OWASP, chiffrement, gestion des accès & authentification'
      ]
    },
    {
      icon: 'fa-brands fa-java',
      title: 'Orienté objet',
      descriptions: ['Langages : C# & Java']
    },
    {
      icon: 'fa-brands fa-unity',
      title: '3D',
      descriptions: ['Unity, Mixamo & SketchUp']
    },
    {
      icon: 'fa-solid fa-language',
      title: 'Langues',
      descriptions: [
        'Français : Bilingue',
        'Anglais : Professionnel (Niveau B2)',
        'Espagnol : Intermédiaire (Niveau A1)'
      ]
    }
  ];
}
