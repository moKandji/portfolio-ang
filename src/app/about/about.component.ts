import { CommonModule } from '@angular/common';
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="about">
  <div class="container">
    <div class="row">
      <div class="about-col-1">
        <img class="phone" src="../assets/photoPortfolio.jpg" width="380" height="400">
      </div>
      <div class="about-col-2">
        <h1 class="sub-title">A Propos de moi</h1>
        <p class="info">Actuellement en cycle ingénieur informatique par apprentissage à Polytech Lyon, je combine formation et expériences concrètes 
          pour développer des solutions performantes et sécurisées. Je conçois des logiciels professionnels adaptés aux besoins des entreprises, 
          notamment dans les domaines des Ressources Humaines et de la gestion d’entreprise. Je veille également à appliquer les meilleures pratiques 
          de cybersécurité, en respectant les recommandations de l’OWASP et en intégrant des mécanismes de chiffrement et d’authentification avancée.
        </p>
        <div class="tab-titles">
          <p class="tab-links" [ngClass]="{ 'active-link': activeTab === 'formation' }" (click)="setActiveTab('formation')">Formation</p>
          <p class="tab-links" [ngClass]="{ 'active-link': activeTab === 'experiences' }" (click)="setActiveTab('experiences')">Expériences</p>
          <p class="tab-links" [ngClass]="{ 'active-link': activeTab === 'competences' }" (click)="setActiveTab('competences')">Certifications</p>
        </div>

        <div class="tab-contents" [style.display]="activeTab === 'formation' ? 'block' : 'none'">

          <ul>
            <li><span>Polytech Lyon : 2024 - 2027</span><br>Cycle ingénieur informatique par apprentissage</li>
            <li><span>EPF - Ecole d'ingénieur-e-s : 2021 - 2024</span><br>Classe préparatoire Scientifique aux Grandes Ecoles (CPGE) & une année en cycle ingénieur généraliste</li>
          </ul>
        </div>
        <div class="tab-contents" [ngClass]="{ 'active-tab': activeTab === 'experiences' }" id="experiences">
          <ul>
          <li><span>09/2024 - 09/2027</span><br>Apprentissage en ingénierie de conception et de développement logiciel</li>
            <li><span>02/2023 - 07/2023</span><br>Stage concepteur de bras robotique à KEUR THIOSSANE</li>
            <li><span>12/2022 - 01/2023</span><br>Stage développeur front-end à SIMPLON</li>
          </ul>
        </div>
        <div class="tab-contents" [ngClass]="{ 'active-tab': activeTab === 'competences' }" id="competences">
          <ul>
            <li><span>Responsive Web Design</span><br>Développement de sites web interactifs</li>
            <li><span>MOOC de l'ANSSI</span><br>Connaissance des bases de la cybersécurité</li>
            <li><span>Certification Voltaire</span><br>Amélioration de mes compétences en communication écrite</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  activeTab: string = 'formation';

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  setActiveTab(tabname: string) {
    this.ngZone.run(() => {
      this.activeTab = tabname;
      this.cdr.detectChanges();
    });
  }
}
