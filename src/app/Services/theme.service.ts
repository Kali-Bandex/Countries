import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
<<<<<<< HEAD
=======
<<<<<<< HEAD

  constructor() {
    document.documentElement.classList.toggle('dark', this.darkMode());
  }
>>>>>>> ad153f7 (Initial Commit)
  darkMode = signal<boolean>(localStorage.getItem('theme') === 'dark');

  constructor() {
    this.applyTheme(this.darkMode());
  }

  toggleTheme() {
    this.darkMode.update(mode => {
<<<<<<< HEAD
=======
      const themeMode = !mode;
      localStorage.setItem('theme', themeMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', themeMode);
      return themeMode
    })
=======
  darkMode = signal<boolean>(localStorage.getItem('theme') === 'dark');

  constructor() {
    this.applyTheme(this.darkMode());
  }

  toggleTheme() {
    this.darkMode.update(mode => {
>>>>>>> ad153f7 (Initial Commit)
      const next = !mode;
      this.applyTheme(next);
      return next;
    });
  }

  private applyTheme(isDark: boolean) {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
<<<<<<< HEAD
=======
>>>>>>> 065d09a (Initial Commit)
>>>>>>> ad153f7 (Initial Commit)
  }
}
