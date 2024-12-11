import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  lastMonthImcomeList = ['January: $1000', 'Febrauary: $1500', 'March: $1200']
  currentMonthImcome = '$2000'

  lastMonthExpenseList = ['January: $900', 'Febrauary: $1200', 'March: $1400']
  currentMonthExpense = '$1500'

  tocalCurrentMonthIncome:number = 1500;
  totalCurrentMonthExpense:number = 2000;


  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call insurance company' }
  ];

  fnIncomeClick(){
    this.router.navigate(['/budget-plan-main/income'])
  }

  fnTodoClick(){
    this.router.navigate(['/budget-plan-main/todo'])
  }

  fnExpenseClick(){
    this.router.navigate(['/budget-plan-main/expense'])
  }

  get getCurrentMonthSavings(){
    return this.tocalCurrentMonthIncome - this.totalCurrentMonthExpense
  }
}
