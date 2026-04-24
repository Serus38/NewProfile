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

  readonly cvHref = computed(() =>
    this.languageService.currentLanguage() === 'en'
      ? '/docs/CV_Sergio_Rivera_Urrea_ATS_EN.pdf'
      : '/docs/CV_Sergio_Rivera_Urrea_ATS.pdf',
  );

  readonly labels = computed<HeroLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        title: 'Software Developer',
        titleHighlight: 'Full Stack',
        subtitle: 'Java Backend Developer | Data Analyst',
        description:
          'Full Stack Developer specializing in Backend and Data Analytics. I build scalable architectures with Java and Spring Boot, transforming complex data into strategic decisions using Power BI..',
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
      subtitle: 'Desarrollador Backend en Java | Analista de datos',
      description:
        'Desarrollador Full Stack especializado en Backend y Análisis de Datos. Construyo arquitecturas escalables con Java y Spring Boot, transformando datos complejos en decisiones estratégicas mediante Power BI.',
      viewProjects: 'VER PROYECTOS',
      downloadCv: 'DESCARGAR CV',
      email: 'CORREO',
      phone: 'TELEFONO',
      profileAlt: 'Foto de perfil',
    };
  });
}
