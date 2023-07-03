import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { region } from 'src/app/models/region.model';
import { RegionService } from 'src/app/services/region.service';
import { Region } from '../header/header.component';

declare var window: any;
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{
  public success!:string;
  public error!:string;
  public regions?:any;
  public formModal!:any;
  public number!: number;
  public formR!:FormGroup

  public formU!:FormGroup
  re : region = new region();

  constructor(public formBulder:FormBuilder, public service:RegionService){}
    ngOnInit(): void {
      this.formModal = new window.bootstrap.Modal(
        document.getElementById("modelId")
      );
      this.formR = this.formBulder.group({
        label :["", Validators.required],
       } );
       this.number = -1;

       this.formU = this.formBulder.group({
        label :["", Validators.required],
       } );
    }
    openModal(region:any){
      this.formModal.show();
      this.formU.controls['label'].setValue(region.label);
      this.re = region;
    }
    updateRegion(){
      this.re.label =  this.formU.value.label;
      this.service.update(this.re).subscribe(
        (data)=>{
          this.success = 'operation reusite'
          this.listRegion
          this.formModal.hide()
        },
        (error)=>{
          this.error ="echec de l'opération"
        }
      );
    }

onRegisteRegion() {
  //r : region;
  const r = new region;
  r.label = this.formR.value.label;
  const res = this.service.save(r);
  if (res!= null) {
   this.success = 'enregistrement reusit';
   this.listRegion();

  }else{
    console.log(this. error);
   this. error= 'echec d\'enregistrement';

  }

}
listRegion()
  {
    this.service.getlist().subscribe(
      (data)=>{
        this.regions= data
        console.log(this.regions);
      },
      (error)=>{
        error="imposible d'\afficher la liste"
      }
    );
  }
  deleteRegion(id:number)
  {
    this.service.deleteRegion(id).subscribe(
      (data)=>{
        this.success ="opération réussite";
        this.listRegion();
      },
      (error)=>{
        this.error="opération reussite"
      }
    )
  }


}
