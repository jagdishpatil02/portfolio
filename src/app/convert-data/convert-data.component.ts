import { Component } from '@angular/core';
import { ElementRef, NgModule, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-convert-data',
  templateUrl: './convert-data.component.html',
  styleUrls: ['./convert-data.component.scss'],
})
export class ConvertDataComponent {
  constructor(private renderer: Renderer2) {}

  pastedText!: string;
  @ViewChild('ecinput', { static: true }) ecinput!: ElementRef;

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    // Get the pasted text from the event and parse it as JSON.
    if (event.clipboardData) {
      this.pastedText = event.clipboardData.getData('text/plain');
    }
    this.renderer.setProperty(
      this.ecinput.nativeElement,
      'innerText',
      this.pastedText
    );
  }

  getRenderedChart(event?: any): void | boolean {}
}
