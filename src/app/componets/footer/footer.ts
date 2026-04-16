import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type FooterLabels = {
  credits: string;
};

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly languageService = inject(LanguageService);

  readonly labels = computed<FooterLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        credits: 'Built with',
      };
    }

    return {
      credits: 'Hecho con',
    };
  });
}
