import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-announcment-modal',
  templateUrl: './create-announcment-modal.component.html',
  styleUrls: ['./create-announcment-modal.component.css']
})
export class CreateAnnouncmentModalComponent implements OnInit {

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
