import { Component, signal } from '@angular/core';
import { Navbar } from "./componets/navbar/navbar";
import { HeroSection } from './componets/hero-section/hero-section';
import { About } from './componets/about/about';
import { Projects } from './componets/projects/projects';
import { Contact } from './componets/contact/contact';
import { Footer } from './componets/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, HeroSection, About, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class App {
  readonly isScrollToTopVisible = signal(false);

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
