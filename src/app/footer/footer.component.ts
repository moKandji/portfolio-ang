import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<footer class="copyright">
  <i class="fa-solid fa-code"></i> Réalisé par : <span class="highlight">Mouhamed KANDJI</span> © {{ currentYear }} <i class="fa-solid fa-code"></i>
</footer>
`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
