export interface Region{
  id:number;
  label:string;
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  i : number =5;

 /*regions: Region[] = [
    {"id": 1 , "label":"nord"},
    {"id": 2 , "label":"ouest"},
    {"id": 3 , "label":"est"},
    {"id": 4 , "label":"sud"},
    {"id": 5 , "label":"nozo"},

  ];*/
  //ecouteurEnfant(event : number){
   // this.regions[this.i] = {"id" : this.i, "label" : "region"+this.i}
   // this.i++;
  //}
}
