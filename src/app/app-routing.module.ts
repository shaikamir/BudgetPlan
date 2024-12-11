import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetPlannerModule } from './budget-planner/budget-planner.module';

const routes: Routes = [
  {
    path: 'budget-plan-main', loadChildren: () => import('./budget-planner/budget-planner.module').then(mod => mod.BudgetPlannerModule)
  },
  {
    path: '',
    redirectTo: '/budget-plan-main',  // Redirect to the main path
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
