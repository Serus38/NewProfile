import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Language, LanguageService } from '../../services/language.service';

type NavLabels = {
  logo: string;
  home: string;
  about: string;
  technologies: string;
  projects: string;
  contact: string;
  languageAriaLabel: string;
  menuToggleAriaLabel: string;
};

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private readonly languageService = inject(LanguageService);

  readonly isMenuOpen = signal(false);
  readonly labels = computed<NavLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        logo: 'My Portfolio',
        home: 'Home',
        about: 'About',
        technologies: 'Technologies',
        projects: 'Projects',
        contact: 'Contact',
        languageAriaLabel: 'Language selector',
        menuToggleAriaLabel: 'Open or close menu',
      };
    }

    return {
      logo: 'Mi Portafolio',
      home: 'Inicio',
      about: 'Acerca de',
      technologies: 'Tecnologias',
      projects: 'Proyectos',
      contact: 'Contacto',
      languageAriaLabel: 'Selector de idioma',
      menuToggleAriaLabel: 'Abrir o cerrar menu',
    };
  });

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  changeLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  isLanguageSelected(language: Language): boolean {
    return this.languageService.currentLanguage() === language;
  }
}
