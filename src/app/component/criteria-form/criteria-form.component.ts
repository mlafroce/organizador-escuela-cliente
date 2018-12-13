import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
