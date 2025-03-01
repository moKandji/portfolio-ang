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
        <!-- 4 projets visibles par défaut -->
        <div class="projet">
          <img src="assets/Alpanova.png" alt="Projet Alpanova">
          <div class="etape">
            <h3>Projet</h3>
            <p>Site commercial pour une station de ski</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/dashboardAlpanova.png" alt="Tableau de bord Alpanova">
          <div class="etape">
            <h3>Tableau de bord</h3>
            <p>Gestion et prédictions des affluences de la station de ski</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/Sudoku.png" alt="Projet Sudoku">
          <div class="etape">
            <h3>Projet</h3>
            <p>Résolution graphique de Sudoku : Backtracking, déduction & Résolveur combiné</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/Multidoku.png" alt="Projet Multidoku">
          <div class="etape">
            <h3>Projet</h3>
            <p>Résolution graphique de Multidoku : Backtracking, déduction & Résolveur combiné</p>
          </div>
        </div>
      </div>

      <!-- Projets cachés au début, affichés avec *ngIf -->
      <div class="list-projets hidden-projets">
        <div class="projet">
          <img src="assets/ExamPrepa.png" alt="Projet Académique">
          <div class="etape">
            <h3>Projet Académique</h3>
            <p>Rendu final de mon projet académique en Bac+2</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/City.png" alt="Ville">
          <div class="etape">
            <h3>Ville</h3>
            <p>Représentation d'une ville avec HTML, CSS & JavaScript</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/Pingouin.png" alt="Pingouin">
          <div class="etape">
            <h3>Pingouin</h3>
            <p>Représentation d'un Pingouin avec HTML & CSS</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/SketchUp.png" alt="Maison 3D">
          <div class="etape">
            <h3>Maison 3D</h3>
            <p>Modélisation d'une maison avec SketchUp & Unity</p>
          </div>
        </div>

        <div class="projet">
          <img src="assets/Marker.png" alt="Marqueur de couleur">
          <div class="etape">
            <h3>Marqueur de couleur</h3>
            <p>Représentation du RGB</p>
          </div>
        </div>
      </div>

      <!-- Bouton "Et bien d'autres !" -->
      <p class="others" style="cursor:pointer;">
        Et bien d'autres !
      </p>
    </div>
  </section>`,
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
}
