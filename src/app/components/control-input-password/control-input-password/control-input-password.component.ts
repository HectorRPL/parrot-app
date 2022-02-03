import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-input-password',
  templateUrl: './control-input-password.component.html',
  styleUrls: ['./control-input-password.component.css']
})
export class ControlInputPasswordComponent implements OnInit {

  @Input() name: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});


  constructor() {
  }

  ngOnInit(): void {
  }

}
