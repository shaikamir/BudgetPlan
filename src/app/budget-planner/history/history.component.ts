import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyForm: any;
  selectedMonth: any;
  blnMonthSelected: boolean = false;

  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 250 }
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.historyForm = this.fb.group({
      month: ['', Validators.required]
    })
  }

  fnChangeEvent(event: any){
    this.selectedMonth = event.target.value;
    this.blnMonthSelected = true;
  }

  calculateTrans(){
    return this.fngetFilteredDetails().reduce((acc, curr) => acc+curr.expenseAmount, 0)
  }

  fngetFilteredDetails(){
    switch(this.selectedMonth){
      case "January":
        return this.januaryExpense
      case "Febrauary":
        return this.februaryExpense
      case "March":
        return this.marchExpense
      default:
        return []
    }
  }

  fnBack(){
    this.router.navigate(['budget-plan-main/dashboard'])
  }

}
