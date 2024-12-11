import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  expenseForm: any;
  selectedMonth: any = "";
  blnMonthSelected: boolean = false;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 }
  ];
  januaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500},
  ];
  februaryExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 250 }
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    })
  }

  fnChangeMonth(event:any){
    this.selectedMonth = event.target.value
    this.blnMonthSelected = true
    this.fngetFilterExpense()
  }

  fngetFilterExpense(){
    switch(this.selectedMonth){
      case 'January':
        return this.januaryExpense
      case 'Febrauary':
        return this.februaryExpense
      case 'March':
        return this.marchExpense
      default:
        return [];
    }
  }

  fnClaculateEachMonthexpense(){
    return this.fngetFilterExpense().reduce((acc, curr) => acc + curr.expenseAmount, 0)
  }

  fnSubmitExpense(){
    if(this.expenseForm.valid){
      this.fngetFilterExpense().push(this.expenseForm.value);
      this.expenseForm.reset()
    }
  }

  fnBack(){
    this.router.navigate(['budget-plan-main/dashboard'])
  }

  fnSaveForm(){
    console.log("Form saved")
  }

}
