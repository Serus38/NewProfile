import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type HeroLabels = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  viewProjects: string;
  downloadCv: string;
  email: string;
  phone: string;
  profileAlt: string;
};

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  private readonly languageService = inject(LanguageService);

  readonly labels = computed<HeroLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        title: 'Software Developer',
        titleHighlight: 'Full Stack',
        subtitle: 'Web Developer | Game Developer | Data Analyst',
        description:
          'Full Stack developer focused on backend and data analysis. I build robust APIs with Java and Spring Boot, and turn data into decisions with Power BI.',
        viewProjects: 'VIEW PROJECTS',
        downloadCv: 'DOWNLOAD RESUME',
        email: 'EMAIL',
        phone: 'PHONE',
        profileAlt: 'Profile photo',
      };
    }

    return {
      title: 'Desarrollador Software',
      titleHighlight: 'Full Stack',
      subtitle: 'Desarrollador Web | Game Developer | Analista de datos',
      description:
        'Desarrollador Full Stack enfocado en backend y analisis de datos. Construyo APIs robustas con Java y Spring Boot, y transformo datos en decisiones con Power BI.',
      viewProjects: 'VER PROYECTOS',
      downloadCv: 'DESCARGAR CV',
      email: 'CORREO',
      phone: 'TELEFONO',
      profileAlt: 'Foto de perfil',
    };
  });
}
