import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("overlay").style.display = "block";
  }

  on() {
    console.log("is on");
    
  }

  off() {
    document.getElementById("overlay").style.display = "none";
  }

}
