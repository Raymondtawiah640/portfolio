import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="min-h-screen flex items-center gradient-bg text-white">
      <div class="container mx-auto px-6 text-center md:text-left">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 slide-up">
            Hi, I'm <span class="text-indigo-400">Raymond Kwame Tawiah</span>
          </h1>
          <h2 class="text-2xl md:text-4xl text-gray-300 mb-8 slide-up animation-delay-200">
            Full Stack Software Engineer
          </h2>
          <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto md:mx-0 slide-up animation-delay-400">
            I build exceptional digital experiences with clean, efficient code and modern technologies.
            Passionate about creating scalable solutions that solve real-world problems.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start slide-up animation-delay-600">
            <a href="#contact" class="btn-primary inline-flex items-center gap-2">
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#projects" class="btn-secondary inline-flex items-center gap-2">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
     
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
     
    .animation-delay-600 {
      animation-delay: 0.6s;
    }
  `]
})
export class HeroComponent {}
