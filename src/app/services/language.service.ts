import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio.language';

  readonly currentLanguage = signal<Language>('es');

  constructor() {
    this.hydrateLanguage();
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.storageKey, language);
    document.documentElement.lang = language;
  }

  private hydrateLanguage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedLanguage = localStorage.getItem(this.storageKey);

    if (savedLanguage === 'es' || savedLanguage === 'en') {
      this.currentLanguage.set(savedLanguage);
    }

    document.documentElement.lang = this.currentLanguage();
  }
}