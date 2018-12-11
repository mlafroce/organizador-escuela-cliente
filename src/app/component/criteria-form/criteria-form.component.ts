import { Component } from '@angular/core';

@Component({
  selector: 'app-criteria-form',
  templateUrl: './criteria-form.component.html',
  styleUrls: ['./criteria-form.component.css']
})
export class CriteriaFormComponent {

  currentCriteriaType : String;
  currentCriteriaValue : String;
  criteriaType: String;
  criteriaTypeList : any = []; 

  constructor() {
  }

  submitForm(value: any){
    console.log(value);
  }

  create() {
  }
}
