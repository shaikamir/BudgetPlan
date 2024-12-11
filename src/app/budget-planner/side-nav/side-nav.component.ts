import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  blnSideNav: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fnToggleSideNav(){
    this.blnSideNav = !this.blnSideNav
  }

  fnNavigate(type: any){
    if(type == 'dashboard'){
      this.router.navigate(['budget-plan-main/dashboard'])
    }
    else if(type == 'profile'){
      this.router.navigate(['budget-plan-main/profile'])
    }
    else if(type == 'history'){
    this.router.navigate(['budget-plan-main/history'])
    }
    else if(type == 'login'){
      this.router.navigate(['budget-plan-main/login'])
    }
  }

}
