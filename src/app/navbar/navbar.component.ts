import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  l1: string;

  constructor() { }

  ngOnInit() {
    this.l1 = "www.google.com";
  }

}
