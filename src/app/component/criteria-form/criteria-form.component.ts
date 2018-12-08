import { Component } from '@angular/core';

@Component({
  selector: 'app-criteria-form',
  templateUrl: './criteria-form.component.html',
  styleUrls: ['./criteria-form.component.css']
})
export class CriteriaFormComponent {

  criteriaType : String;
  criteriaValue : String;
  criteriaList : any = []; 

  constructor() {
  }

  submitForm(value: any){
    console.log(value);
  }
}
