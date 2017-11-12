import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'zaralot-switch-route-input',
  template: `
   <ng-container [formGroup]="routeFormGroup">
    <input type="text" formControlName="port">
    <input type="text" formControlName="cableRef">
    <input type="text" formControlName="destination">
   </ng-container>
`,
  styleUrls: []
})
export class SwitchRouteInputComponent implements OnInit {
  @Input()
  routeFormGroup: FormGroup;
  @Input()
  portnumber: number;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.routeFormGroup.patchValue({'port': this.portnumber + 1});
  }

}
