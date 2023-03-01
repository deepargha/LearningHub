import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  registrationForm!: FormGroup;
  start: boolean = false
  constructor(private formBuilder: FormBuilder) { 
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
    });
  }

 
 

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)

  }

}
