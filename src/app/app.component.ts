import {
  AfterContentInit,
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  lightMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('lightMode') ?? 'true')
  );

  @HostBinding('class.dark') get darkmode() {
    return this.darkMode();
  }
  @HostBinding('class.light') get lightmode() {
    return this.lightMode();
  }
  toggleMode(mode: 'dark' | 'light') {
    if (mode === 'dark') {
      const bgImage = document.getElementById('bgCoverImage')!;
      bgImage.style.backgroundImage = 'url(../assets/images/sunset.jpg)';
      this.darkMode.set(true);
      this.lightMode.set(false);
    } else {
      const bgImage = document.getElementById('bgCoverImage')!;
      bgImage.style.backgroundImage = 'url(../assets/images/sunrise.jpg)';
      this.lightMode.set(true);
      this.darkMode.set(false);
    }
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
      window.localStorage.setItem(
        'lightMode',
        JSON.stringify(this.lightMode())
      );
    });
  }

  ngOnInit() {
    initFlowbite();
  }
}
