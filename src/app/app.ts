import { Component, computed, inject, signal } from '@angular/core';
import { Navbar } from "./componets/navbar/navbar";
import { HeroSection } from './componets/hero-section/hero-section';
import { About } from './componets/about/about';
import { Projects } from './componets/projects/projects';
import { Contact } from './componets/contact/contact';
import { Footer } from './componets/footer/footer';
import { StackTec } from './componets/stack-tec/stack-tec';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, HeroSection, About, Projects, Contact, Footer, StackTec],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class App {
  private readonly languageService = inject(LanguageService);

  readonly isScrollToTopVisible = signal(false);
  readonly scrollToTopAriaLabel = computed(() =>
    this.languageService.currentLanguage() === 'en' ? 'Back to top' : 'Volver arriba'
  );

  onWindowScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isScrollToTopVisible.set(window.pageYOffset > 300);
  }

  scrollToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
