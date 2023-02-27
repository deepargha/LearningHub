import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  start: boolean = false
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)

  }

}
