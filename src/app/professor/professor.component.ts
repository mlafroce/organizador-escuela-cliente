import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from '../professors.service';
import { Professor } from '../professor';
declare var $: any;

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  title = "Profesores";
  professors : any = [];
  newProfessor : Professor = new Professor();
  addProfModal = "#prof-add-modal";

  constructor(private professorsService: ProfessorsService) { }

  create() : void {
    if (!this.newProfessor.valid()) { return; }
    this.professorsService.create(this.newProfessor)
      .then(prof => {
      console.log(this.professors);
      console.log(prof);
        this.professors.push(prof);
        $(this.addProfModal).modal('toggle');
      });
  }

  ngOnInit() {
    this.professorsService.getAllProfessors().subscribe(professors => {
      this.professors = professors;
    });
  }

}
