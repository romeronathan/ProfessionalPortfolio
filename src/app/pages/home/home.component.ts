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
  
  

}
