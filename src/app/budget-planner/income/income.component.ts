import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  incomeForm: any;
  SelectedMonth: any;
  blnMonthSelected: boolean = false;

  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    // const currentDate = new Date();
    // this.SelectedMonth = currentDate.toLocaleString('default', { month: 'long' });
   }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    })

    // const currentDate = new Date();
    // this.SelectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }

  fnChangeEvent(event: any){
    this.SelectedMonth = event.target.value
    this.getFilteredDetails();
    this.blnMonthSelected = true;
  } 

  getFilteredDetails(){
    let filterResult:any[] = [];
    if(this.SelectedMonth == 'January'){
      filterResult = [...this.januaryIncomes]
    }
    else if(this.SelectedMonth == 'Febrauary'){
      filterResult = [...this.februaryIncomes]
    }
    else if(this.SelectedMonth == 'March'){
      filterResult = [...this.marchIncomes]
    }

    return filterResult
  }

  getIncomeForEachMonth(month: String){
    switch(month){
      case 'January':
        return this.januaryIncomes
      case 'Febrauary':
        return this.februaryIncomes
      case 'March':
        return this.marchIncomes
      default:
        return []
    }
  }

  calculateTotalIncome(month: string): number{
    let totalIncome: number = 0;
    console.log("coming here")
    if(month != ''){
      for(let eachAmount of this.getIncomeForEachMonth(month)){
        console.log("coming here also", eachAmount, "amount", eachAmount.amount)
        totalIncome += Number(eachAmount.amount);
      }
    }
    return totalIncome
  }
  
  fnSubmit(){
    if(this.incomeForm.valid){
      let incomeRes = this.incomeForm.value;
      console.log("incomeRes", incomeRes)
      switch(this.SelectedMonth){
        case "January": 
          this.januaryIncomes.push(incomeRes)
          break
        case "Febrauary":
          this.februaryIncomes.push(incomeRes)
          break
        case "March":
          this.marchIncomes.push(incomeRes)
          break
        default:
          break
      }
      this.incomeForm.reset()
      // this.calculateTotalIncome('')
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
    }
  }

  fnSaveForm(){

  }

  fnBackForm(){
    this.router.navigate(['/budget-plan-main/dashboard'])
  }
}
