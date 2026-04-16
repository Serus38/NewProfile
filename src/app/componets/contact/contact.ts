import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface ContactAction {
  key: 'email' | 'whatsapp' | 'linkedin';
  label: string;
  href: string;
  icon: string;
  target?: '_blank';
  rel?: 'noopener noreferrer';
}

type ContactLabels = {
  kicker: string;
  channelsAriaLabel: string;
  contactByPrefix: string;
};

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly languageService = inject(LanguageService);

  readonly labels = computed<ContactLabels>(() => {
    if (this.languageService.currentLanguage() === 'en') {
      return {
        kicker: 'CONTACT',
        channelsAriaLabel: 'Contact channels',
        contactByPrefix: 'Contact via',
      };
    }

    return {
      kicker: 'CONTACTO',
      channelsAriaLabel: 'Canales de contacto',
      contactByPrefix: 'Contactar por',
    };
  });

  readonly contactActions = computed<ContactAction[]>(() => {
    const isEnglish = this.languageService.currentLanguage() === 'en';

    return [
    {
      key: 'email',
      label: isEnglish ? 'Email' : 'Correo',
      href: 'mailto:matambita08@gmail.com',
      icon: '/img/icon-mail.png',
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/573017319664?text=Hola%20Sergio%2C%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20tu%20perfil%20como%20desarrollador.%20Me%20gustar%C3%ADa%20hablar%20sobre%20una%20posible%20oportunidad%20o%20proyecto.',
      icon: '/img/icon-whatsapp.png',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sergio-rivera-urrea/',
      icon: '/img/icon-linkedin.png',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    ];
  });
}
