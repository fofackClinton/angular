import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { region } from '../models/region.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegionService {

CREATE_REGION = "http://127.0.0.1:8000/api/region";

save(reg:region):region{

 const req =this.Client.post<any>(`${this.CREATE_REGION}`, reg);
  req.subscribe(
                data =>{return data;},
                error=>{return null}

    );

return reg;

}
getlist():Observable<region[]>{

 return this.Client.get<any>(`${this.CREATE_REGION}`) ;
   }
deleteRegion(id:number):Observable<region[]>{

    return this.Client.delete<any>(`${this.CREATE_REGION}/${id}`) ;
}
update(re : region):Observable<region[]>{

  return this.Client.put<any>(`${this.CREATE_REGION}/${re.id}`,re) ;
}

  constructor(public Client : HttpClient) { }
}


