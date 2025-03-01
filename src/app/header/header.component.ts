import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="header">
    <div class="container">
      <nav>
        <img width="140" src="../assets/logo.png" class="logo">
        <ul id="sidemenu">
          <li><a href="#header">Accueil</a></li>
          <li><a href="#about">A Propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="header-text">
        <p>Apprenti ingénieur conception logiciel</p>
        <h1>Bonjour, je suis <span> Mouhamed</span><br> KANDJI</h1>
      </div>
    </div>
  </div>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}