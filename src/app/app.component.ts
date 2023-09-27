import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-renata-ribeiro';
  backgroundImage = '../assets/background.mp4';

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.videoPlayer.nativeElement, 'canplay', () => {
      this.videoPlayer.nativeElement.play();
    });
  }
}
