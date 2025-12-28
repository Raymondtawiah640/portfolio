import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsComponent, ContactComponent],
  template: `
    <main class="gradient-bg">
      <app-hero></app-hero>
      
      <section id="about-section" class="py-16 md:py-20 lg:py-24 fade-in">
        <div class="container mx-auto px-4">
          <app-about></app-about>
        </div>
      </section>
      
      <section id="skills-section" class="py-16 md:py-20 lg:py-24 bg-gray-900/30 fade-in">
        <div class="container mx-auto px-4">
          <app-skills></app-skills>
        </div>
      </section>
      
      <section id="contact-section" class="py-16 md:py-20 lg:py-24 fade-in">
        <div class="container mx-auto px-4">
          <app-contact></app-contact>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}