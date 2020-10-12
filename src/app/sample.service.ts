import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }
  getdata():Observable<any>{
    const url ="https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
