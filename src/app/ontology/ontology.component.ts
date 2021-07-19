import {Component, OnInit} from '@angular/core';
import {OntologyService} from "../service/ontology.service";
import {Ontology} from "../model/ontology";
import {HttpErrorResponse} from "@angular/common/http";
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Validators} from "@angular/forms";
import {Config} from "../model/config";


@Component({
  selector: 'app-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.css'],
})
export class OntologyComponent implements OnInit {

  ontology: Ontology = {config: {}};
  newOntology: Ontology = {config: {}};
  newConfig: Config = {};

  ontologyForm = new FormGroup({
    ontologyId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    definitionProperties: new FormArray([new FormControl('', Validators.required)]),
    synonymProperties: new FormArray([new FormControl('',Validators.required)]),
  });

  title = "Ontology Tools Test";
  errorMessage?: HttpErrorResponse;
  ontologyId = new FormControl('', Validators.required);
  saveResult?: string;

  constructor(private ontologyService: OntologyService) {

  }

  ngOnInit(): void {

  }

  getById(): void {
    this.ontologyService.getById(this.ontologyId.value)
      .subscribe(data => {
        this.ontology = data;
        this.errorMessage = undefined;
      }, (error) => {
        this.errorMessage = error.message;
        this.ontology = {config: {}};
      })
  }

  onSubmit() {

    this.newConfig = new Config(this.ontologyForm.get("title")?.value,
      this.ontologyForm.get("description")?.value,
      this.ontologyForm.get("definitionProperties")?.value,
      this.ontologyForm.get("synonymProperties")?.value)
    this.newOntology = new Ontology(this.ontologyForm.get("ontologyId")?.value, this.newConfig);

    this.ontologyService.save(this.newOntology)
      .subscribe(data => {
        this.saveResult = data;
        this.errorMessage = undefined;
      }, (error) => {
        this.errorMessage = error.message;
        this.ontologyForm = new FormGroup({
          ontologyId: new FormControl('', Validators.required),
          title: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required),
          definitionProperties: new FormArray([new FormControl('')]),
          synonymProperties: new FormArray([new FormControl('')]),
        });
      })
  }

  get definitionProperties(): FormArray {
    return this.ontologyForm.get('definitionProperties') as FormArray;
  }

  get synonymProperties(): FormArray {
    return this.ontologyForm.get('synonymProperties') as FormArray;
  }

  addSynonym() {
    this.synonymProperties.push(new FormControl());
  }

  addDefinition() {
    this.definitionProperties.push(new FormControl());
  }
}
