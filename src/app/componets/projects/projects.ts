import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type ProjectsLabels = {
  kicker: string;
  title: string;
  card1Badge: string;
  card1Title: string;
  card1Description: string;
  card2Badge: string;
  card2Title: string;
  card2Description: string;
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly languageService = inject(LanguageService);

  readonly labels = computed<ProjectsLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        kicker: 'FEATURED PROJECTS',
        title: 'Built Solutions',
        card1Badge: 'FULLSTACK / API',
        card1Title: 'Shipment Tracking',
        card1Description:
          'Development of a web interface for shipment tracking, including authentication, route visualization, and real-time updates to optimize user experience.',
        card2Badge: 'DASHBOARD / ANALYTICS',
        card2Title: 'Analytics Dashboard',
        card2Description:
          'Creation of an interactive dashboard for data analysis, using dynamic visualizations and filtering tools to support data-driven decision-making.',
      };
    }

    return {
      kicker: 'PROYECTOS DESTACADOS',
      title: 'Soluciones desarrolladas',
      card1Badge: 'FULLSTACK / API',
      card1Title: 'Seguimiento de envios',
      card1Description:
        'Desarrollo de una interfaz web para el seguimiento de envios, con funcionalidades de autenticacion, visualizacion de rutas y actualizaciones en tiempo real, optimizando la experiencia del usuario.',
      card2Badge: 'DASHBOARD / ANALISIS',
      card2Title: 'Dashboard de Analisis',
      card2Description:
        'Creacion de un dashboard interactivo para el analisis de datos, utilizando visualizaciones dinamicas y herramientas de filtrado para facilitar la toma de decisiones basada en datos.',
    };
  });
}
