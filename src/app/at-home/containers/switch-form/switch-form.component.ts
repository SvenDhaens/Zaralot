import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'zaralot-switch-form',
  template: `
  <form formGroup='switchRouteForm' [formGroup]="switchRouteForm" (ngSubmit)="onSubmit()">
    <input type="text" formControlName="description">
    <button type="button" (click)='remove()'>Remove</button>
    <button type="button" (click)='AddRoute()'>Add Route</button><br>
    <div *ngFor="let routeInput of switchRouteForm.controls.routes.controls; let i = index" >
      <zaralot-switch-route-input [routeFormGroup]="routeInput" [portnumber]="i"></zaralot-switch-route-input>
      <button type="button" (click)="removeRoute(i)">remove me</button>
    </div>
    <button type="submit"> Submit</button>
  </form>
  {{switchRouteForm.value | json}}
`,
  styleUrls: []
})
export class SwitchFormComponent implements OnInit {
  switchRouteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.switchRouteForm = this.formBuilder.group({
      description: [null, Validators.required],
      routes: this.formBuilder.array([])
    });
  }

  get routes(): FormArray {
    return (this.switchRouteForm.get('routes') as FormArray);
  }

  AddRoute() {
    // routes.push()
    this.routes.push(this.formBuilder.group({
      port: [],
      cableRef: [],
      destination: [],
    }));
  }

  remove() {
    for (const i = 0; i < this.routes.length;) {
      this.routes.removeAt(i);
    }
  }

  removeRoute(i: number) {
    this.routes.removeAt(i);
  }

  onSubmit() {
    console.log('test');
    console.log(`submitted :${JSON.stringify(this.switchRouteForm.value)}`);
  }


}
