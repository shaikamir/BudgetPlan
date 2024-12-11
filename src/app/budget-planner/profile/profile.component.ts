import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: any;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required, Validators.min(18)],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      occupation: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      contact: ['', Validators.required]
    })
  }

  fnSubmitProfile(){
    if(this.profileForm.valid){
      console.log("profile details saved successfully", this.profileForm.value)
    }
    else{
      this.openSnackBar("Please fill all fields", "close")
    }
  }

  openSnackBar(msg: any, action: any){
    this.snackBar.open(msg, action, {
      duration: 3000
    })
  }
}
