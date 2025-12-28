<<<<<<< HEAD
import { Component, signal } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> c3704f358ee1d84d19d02f45d033e4f973b95e30
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('portfolio');
=======
  protected title = 'portfolio';
>>>>>>> c3704f358ee1d84d19d02f45d033e4f973b95e30
}
