import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
=======
  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
>>>>>>> c3704f358ee1d84d19d02f45d033e4f973b95e30
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio');
  });
});
