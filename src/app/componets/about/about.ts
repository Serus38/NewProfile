import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type AboutLabels = {
  kicker: string;
  statsAriaLabel: string;
  education: string;
  englishLevel: string;
  role: string;
};

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  private readonly languageService = inject(LanguageService);

  readonly isEnglish = computed(() => this.languageService.currentLanguage() === 'en');
  readonly labels = computed<AboutLabels>(() => {
    if (this.isEnglish()) {
      return {
        kicker: 'PROFESSIONAL PROFILE',
        statsAriaLabel: 'Professional summary',
        education: 'ACADEMIC BACKGROUND',
        englishLevel: 'ENGLISH LEVEL',
        role: 'STACK DEVELOPER',
      };
    }

    return {
      kicker: 'PERFIL PROFESIONAL',
      statsAriaLabel: 'Resumen profesional',
      education: 'FORMACION ACADEMICA',
      englishLevel: 'NIVEL DE INGLES',
      role: 'STACK DEVELOPER',
    };
  });
}
