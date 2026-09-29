import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../model/product/product'
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class Homeservice {
  

    private http=inject(HttpClient);

    private apiurl=inject('https://dummyjson.com/products ')


    data:data[]=[];
   
    getproducts():Observable<data[]>{
        return this.http.get<{data=data[]}>(this.apiurl)

        .pipe{
            map(Response=>Response.data)
        }
    }

}
