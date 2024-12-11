import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-transactions',
  templateUrl: './todo-transactions.component.html',
  styleUrls: ['./todo-transactions.component.scss']
})
export class TodoTransactionsComponent implements OnInit {
  todoForm: any;
  blnMonthSelected: boolean = false;
  selectedMonth: any;

  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 }
  ];
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
   this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    })
  }

  fnChangeTodo(event: any){
    this.selectedMonth = event.target.value;
    this.blnMonthSelected = true;
    this.fngetFilteredDetails()
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

  calculateTotalTodos(){
   return this.fngetFilteredDetails().reduce((acc, curr) => acc+curr.expenseAmount, 0)
  }


  fnAddTodoTransaction(){
    if(this.todoForm.valid){
      this.fngetFilteredDetails().push(this.todoForm.value)
    }
  }


  fnSubmitTodo(){

  }

  fnBack(){
    this.router.navigate(['budget-plan-main/dashboard'])
  }

  

}
