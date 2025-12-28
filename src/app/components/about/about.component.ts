import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-20 bg-gray-900/50 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16 section-title">
          About Me
        </h2>
        
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div class="relative bg-gray-800 p-1 rounded-lg overflow-hidden h-[400px] md:h-[500px] card">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Raymond Kwame Tawiah"
                  class="rounded-lg w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div class="text-white">
                    <h4 class="text-xl font-semibold">Raymond Kwame Tawiah</h4>
                    <p class="text-indigo-300">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
          <div class="md:w-1/2">
            <h3 class="text-2xl font-semibold mb-4">Who am I?</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              I'm Raymond Kwame Tawiah, a passionate Software Engineer with expertise in building modern web applications.
              With a strong foundation in software development principles and a keen eye for design, I create efficient,
              scalable, and user-friendly solutions.
            </p>
            <p class="text-gray-300 mb-8 leading-relaxed">
              My journey in software development began with a fascination for how technology can solve real-world problems.
              Over the years, I've honed my skills in both frontend and backend development, allowing me to create
              comprehensive solutions that deliver exceptional user experiences.
            </p>
             
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="flex items-center p-4 bg-gray-800 rounded-lg">
                <div class="mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Experience</h4>
                  <p class="text-sm text-gray-400">5+ Years</p>
                </div>
              </div>
               
              <div class="flex items-center p-4 bg-gray-800 rounded-lg">
                <div class="mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Projects</h4>
                  <p class="text-sm text-gray-400">20+ Completed</p>
                </div>
              </div>
               
              <div class="flex items-center p-4 bg-gray-800 rounded-lg">
                <div class="mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Expertise</h4>
                  <p class="text-sm text-gray-400">Full Stack</p>
                </div>
              </div>
               
              <div class="flex items-center p-4 bg-gray-800 rounded-lg">
                <div class="mr-3 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Email</h4>
                  <p class="text-sm text-indigo-400">raymondtawiah23@gmail.com</p>
                </div>
              </div>
            </div>
           
            <a
              href="#contact"
              class="btn-primary inline-flex items-center gap-2 top-30"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}
