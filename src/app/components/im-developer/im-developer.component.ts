import { Component  } from '@angular/core';

@Component({
  selector: 'app-im-developer',
  templateUrl: './im-developer.component.html',
  styleUrls: ['./im-developer.component.css']
})
export class ImDeveloperComponent {
  typewriterText: string = '';
  textArray: string[] = ['a Developer', 'a Freelancer'];
  textIndex: number = 0;
  charIndex: number = 0;
  isTyping: boolean = true;

  ngOnInit() {
    this.type();
  }

  type() {
    if (this.isTyping) {
      if (this.charIndex < this.textArray[this.textIndex].length) {
        this.typewriterText += this.textArray[this.textIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.type(), 100); 
      } else {
        this.isTyping = false;
        setTimeout(() => this.erase(), 1000);
      }
    }
  }

  erase() {
    if (!this.isTyping) {
      if (this.charIndex > 0) {
        this.typewriterText = this.textArray[this.textIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.erase(), 50); 
      } else {
        this.isTyping = true;
        this.textIndex = (this.textIndex + 1) % this.textArray.length;
        setTimeout(() => this.type(), 500); 
      }
    }
  }
}

