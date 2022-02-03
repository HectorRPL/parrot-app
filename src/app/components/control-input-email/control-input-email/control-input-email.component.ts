import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-input-email',
  templateUrl: './control-input-email.component.html',
  styleUrls: ['./control-input-email.component.css']
})
export class ControlInputEmailComponent implements OnInit {

  @Input() name: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});


  constructor() {
  }

  ngOnInit(): void {
  }

}
