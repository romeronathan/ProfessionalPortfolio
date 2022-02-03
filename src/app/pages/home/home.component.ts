import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  i: number = 0;
  imgDoc: any;
  containerDoc: any;
  constructor() { }

  ngOnInit(): void {
    this.i = 0;
    window.scrollTo(0, 0);
    this.imgDoc =  document.getElementById('undraw-picture')!;
    this.containerDoc = document.getElementById('hidden-box')!;
    this.containerDoc.setAttribute(
      "style", "display: none;");
  }
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
  
    if(this.i <= 1000 || this.i > 0) {

      if(this.i > 900) {
        this.i = 900;

      } else if (this.i < 0) {
        this.i = 0;
      }
    
    this.i += event.deltaY;
    console.log(this.i);

    if(this.i >= 800) {
      this.containerDoc.setAttribute(
        "style", "display: ;");
    }
     else {
      this.containerDoc.setAttribute(
        "style","display: none;");
     }
  
    if(this.i < 100) { 
      this.imgDoc.setAttribute(
       "src", "../../../assets/svg-scroll-images/grouped.svg");

    }else  if(this.i < 200) {
      this.imgDoc.setAttribute(
       "src", "../../../assets/svg-scroll-images/grouped2.svg");
 
     }
     else  if(this.i < 300) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped3.svg");

    }
    else  if(this.i < 400) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped4.svg");
      this.containerDoc.setAttribute(
        "style", "opacity: 0;");

    }
    else  if(this.i < 500) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped5.svg");
   
    }
    else  if(this.i < 600) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped6.svg");

    }
    else  if(this.i < 700) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped7.svg");

    }
    else  if(this.i < 800) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped8.svg");

        
    }
    else  if(this.i < 900) {
      this.imgDoc.setAttribute(
      "src", "../../../assets/svg-scroll-images/grouped9.svg");

    }
  }
  }

}
