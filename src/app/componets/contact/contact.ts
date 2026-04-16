import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ContactAction {
  label: string;
  href: string;
  icon: string;
  target?: '_blank';
  rel?: 'noopener noreferrer';
}

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly contactActions: ContactAction[] = [
    {
      label: 'Correo',
      href: 'mailto:matambita08@gmail.com',
      icon: '/img/icon-mail.png',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/573017319664?text=Hola%20Sergio%2C%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20tu%20perfil%20como%20desarrollador.%20Me%20gustar%C3%ADa%20hablar%20sobre%20una%20posible%20oportunidad%20o%20proyecto.',
      icon: '/img/icon-whatsapp.png',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sergio-rivera-urrea/',
      icon: '/img/icon-linkedin.png',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];
}
