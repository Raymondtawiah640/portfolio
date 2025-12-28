import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-20 bg-gray-900/30 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-4 section-title">My Skills</h2>
        <br>
        <p class="text-center text-gray-400 max-w-3xl mx-auto mb-16 fade-in">
          I've worked with a variety of technologies in the web development world.
          Here are some of the technologies I'm proficient in, with a focus on modern frameworks and tools.
        </p>
         
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          @for (skill of skills; track skill.name) {
            <div class="skill-item group">
              <div class="flex flex-col items-center p-6 bg-gray-800 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 card">
                <div class="text-4xl mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <i [class]="skill.icon"></i>
                </div>
                <h3 class="text-lg font-semibold mb-3">{{ skill.name }}</h3>
                <div class="w-full bg-gray-700 rounded-full h-3">
                  <div
                    class="bg-gradient-to-r from-indigo-400 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    [style.width.%]="skill.level"
                    [style.maxWidth]="'100%'"
                  ></div>
                </div>
                <span class="text-sm text-gray-400 mt-3">{{ skill.level }}%</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-item {
      opacity: 0;
      animation: fadeInUp 0.8s forwards;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Add staggered animation delay */
    .skill-item:nth-child(1) { animation-delay: 0.1s; }
    .skill-item:nth-child(2) { animation-delay: 0.2s; }
    .skill-item:nth-child(3) { animation-delay: 0.3s; }
    .skill-item:nth-child(4) { animation-delay: 0.4s; }
    .skill-item:nth-child(5) { animation-delay: 0.5s; }
    .skill-item:nth-child(6) { animation-delay: 0.6s; }
  `]
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'React', level: 75, icon: 'fab fa-react' },
    { name: 'MongoDB', level: 80, icon: 'fas fa-database' },
    { name: 'Docker', level: 70, icon: 'fab fa-docker' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
    { name: 'AWS', level: 70, icon: 'fab fa-aws' },
    { name: 'Python', level: 75, icon: 'fab fa-python' },
    { name: 'Java', level: 65, icon: 'fab fa-java' },
  ];
}
