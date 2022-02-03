import { Component, OnInit } from '@angular/core';
import { Link } from '../types/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: Link[] = [];
  constructor() { }

  ngOnInit(): void {
    this.links = [
      { name: 'Home', href: '/' },
      { name: 'Work', href: '/about' },
      { name: 'About', href: '/news-&-research' }
    ];
  }

}
