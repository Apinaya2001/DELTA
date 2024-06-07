import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {JsonService} from "../../services/json.service";
@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    NgForOf,

  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit{
  data: any;

  constructor(private jsonDataService:JsonService) {
  }
  ngOnInit(){
    this.jsonDataService.getJsonData().subscribe(
      data => {
        this.data = data;
        console.log(this.data); // For debugging purposes
      },
      error => {
        console.error('Error loading JSON data', error);
      }
    );
  }

}
