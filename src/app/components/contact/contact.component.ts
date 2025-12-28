import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="py-16 md:py-20 lg:py-28 w-full gradient-bg text-white">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div class="text-center mb-16 max-w-3xl mx-auto fade-in">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 section-title">
            Get In Touch
          </h2>
          <p class="text-lg md:text-xl text-gray-300 leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out. I'm always open to new challenges and collaborations.
          </p>
        </div>
         
        <div class="max-w-6xl mx-auto">
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700/30">
            <div class="p-8 md:p-12">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Column - Contact Info -->
                <div class="space-y-8">
                  <div>
                    <h3 class="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                    <p class="text-gray-300 mb-8 leading-relaxed">
                      I'm available for freelance work and full-time positions.
                      Let's create something amazing together!
                    </p>
                  </div>
 
                  <div class="space-y-6">
                    <div class="flex items-start space-x-4 group">
                      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-sm font-medium text-gray-400">Email</h4>
                        <a href="mailto:raymondtawiah23@gmail.com" class="text-lg text-white hover:text-indigo-400 transition-colors">raymondtawiah23@gmail.com</a>
                      </div>
                    </div>
                     
                    <div class="flex items-start space-x-4 group">
                      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-sm font-medium text-gray-400">Phone</h4>
                        <a href="tel:+233208649694" class="text-lg text-white hover:text-indigo-400 transition-colors">+233 20 864 9694</a>
                      </div>
                    </div>
                  </div>
                </div>
 
                <!-- Right Column - Contact Form -->
                <div class="bg-gray-800/30 rounded-xl p-8 border border-gray-700/30 card">
                  <h3 class="text-2xl font-bold mb-6 text-white">Send me a message</h3>
                  <form class="space-y-6">
                    <div class="space-y-2">
                      <label for="name" class="block text-sm font-medium text-gray-300">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        class="input-field"
                        placeholder="John Doe"
                      >
                    </div>
                     
                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        class="input-field"
                        placeholder="you@example.com"
                      >
                    </div>
                     
                    <div class="space-y-2">
                      <label for="message" class="block text-sm font-medium text-gray-300">Your Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        class="input-field"
                        placeholder="Hello! I'd like to discuss a potential project..."
                      ></textarea>
                    </div>
                     
                    <button
                      type="submit"
                      class="btn-primary w-full inline-flex items-center justify-center gap-2"
                    >
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {}