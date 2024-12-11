import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoTransactionsComponent } from './todo-transactions/todo-transactions.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    SideNavComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoTransactionsComponent,
    HistoryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class BudgetPlannerModule { }
