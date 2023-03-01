import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { User } from 'src/user';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  registrationForm!: FormGroup;
  start: boolean = false
  user:User = new User();
  usersList: any[] = [];
  errorMsg:string | undefined;
  user2:User = new User();

  constructor(private formBuilder: FormBuilder) { 
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
    });
  }

 
 

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000);
    this.user2.name="abc";
    this.user2.email="abc@gmail.com";
    this.user2.password="12345678";
    this.usersList.push(this.user2);
    for(const user of this.usersList){
      console.log(user);
    }
  }

  saveUser(){
    
   /* if(this.user.email=="s.mukherjee@yahoo.com"){
      this.errorMsg='This email already exists!';
    }*/
    
    for(const email of this.usersList){
      console.log(email);
      if(email.email==this.user.email){
        this.errorMsg='This email already exists!';
      }
      else{
        this.usersList.push(this.user);
      }
    }
    
    console.log(this.user);
  }

}
