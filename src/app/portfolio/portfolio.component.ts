import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `<section id="portfolio">
    <div class="container">
      <h1 class="sub-title">Mes Projets</h1>
      <div class="list-projets">
        <div *ngFor="let projet of projets | slice:0:(afficherTout ? projets.length : 4)" class="projet">
          <img [src]="projet.image" alt="{{ projet.title }}">
          <div class="etape">
            <h3>{{ projet.title }}</h3>
            <p>{{ projet.description }}</p>
          </div>
        </div>
      </div>
      <!-- Affiche le bouton uniquement si on ne montre pas déjà tous les projets -->
      <p *ngIf="!afficherTout" class="others" (click)="afficherTout = true" style="cursor:pointer;">
        Et bien d'autres !
      </p>
    </div>
  </section>`,
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Variable qui détermine si on affiche tous les projets ou seulement les 4 premiers
  afficherTout = false;

  projets = [
    { image: 'assets/Alpanova.png', title: 'Projet', description: 'Site commerciale pour une station de ski' },
    { image: 'assets/dashboardAlpanova.png', title: 'Tableau de bord', description: 'Gestion et prédictions des affluences de la station de ski' },
    { image: 'assets/Sudoku.png', title: 'Projet', description: 'Résolution graphique de Sudoku : Backtracking, déduction & Résolveur combiné' },
    { image: 'assets/Multidoku.png', title: 'Projet', description: 'Résolution graphique de Multidoku : Backtracking, déduction & Résolveur combiné' },
    { image: 'assets/ExamPrepa.png', title: 'Projet Académique', description: 'Rendu final de mon projet académique en Bac+2' },
    { image: 'assets/City.png', title: 'Ville', description: 'Représentation d\'une ville avec HTML, CSS & JavaScript' },
    { image: 'assets/Pingouin.png', title: 'Pingouin', description: 'Représentation d\'un Pingouin avec HTML & CSS' },
    { image: 'assets/SketchUp.png', title: 'Maison 3D', description: 'Modélisation d\'une maison avec SketchUp & Unity' },
    { image: 'assets/Marker.png', title: 'Marqueur de couleur', description: 'Représentation du RGB' }
  ];
}
