import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private snackbar: MatSnackBar) { }

  loginForm:any;
  registerForm:any;
  activeForm: 'login' | 'register' = 'login'

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  fnFormLogin(){
    if(this.loginForm.valid){
      console.log("after success login", this.loginForm.value)
      this.router.navigate(['budget-plan-main/dashboard'])
    }
    else{
      this.snackbar.open('Invalid details', 'Close', {duration: 3000, verticalPosition: 'top'})
    }
  }

  fnRegisterForm(){
    if(this.registerForm.valid){
      setTimeout(() =>{
        window.location.reload()
      },1000)
      this.router.navigate(['budget-plan-main/login'])
    }
    else{
      this.snackbar.open('Invalid details', 'Close', {duration: 3000, verticalPosition: 'top'})
    }
  }

  toggleLink(formType: any){
    this.activeForm = formType
  }


}
