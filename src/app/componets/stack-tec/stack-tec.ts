import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface TechnologyItem {
  name: string;
  image: string;
}

type StackLabels = {
  kicker: string;
  title: string;
};

@Component({
  selector: 'app-stack-tec',
  imports: [NgOptimizedImage],
  templateUrl: './stack-tec.html',
  styleUrl: './stack-tec.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackTec {
  private readonly languageService = inject(LanguageService);

  readonly labels = computed<StackLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        kicker: 'TECHNOLOGIES',
        title: 'Tech Stack',
      };
    }

    return {
      kicker: 'TECNOLOGIAS',
      title: 'Stack Tecnologico',
    };
  });

  readonly technologies: TechnologyItem[] = [
    { name: 'Java', image: '/img/icon-java.png' },
    { name: 'Spring Boot', image: '/img/icon-spring-boot.png' },
    { name: 'Angular', image: '/img/icon-angular.png' },
    { name: 'JavaScript', image: '/img/icon-javascript.png' },
    { name: 'TypeScript', image: '/img/icon-typescript.png' },
    { name: 'HTML5', image: '/img/icons-html.png' },
    { name: 'CSS3', image: '/img/icon-css3.png' },
    { name: 'React', image: '/img/icon-react.png' },
    { name: 'MongoDB', image: '/img/icon-mongodb.png' },
    { name: 'MySQL', image: '/img/icon-mysql.png' },
    { name: 'Docker', image: '/img/icon-docker.png' },
    { name: 'Git', image: '/img/icon-git.png' },
    { name: 'Azure DevOps', image: '/img/icon-azure-devops.png' },
    { name: 'Postman', image: '/img/icon-postman.png' },
    { name: 'Power BI', image: '/img/icon-power-bi.png' },
    { name: 'Supabase', image: '/img/icon-supabase.png' },
    { name: 'Office 365', image: '/img/icon-office-365.png' },
  ];
}
