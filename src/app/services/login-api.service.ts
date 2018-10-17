import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


const _headers= new HttpHeaders()
const headers1=_headers.append('Content-Type','application/json');

@Injectable()
export class LoginApiService {
 rootUrl='https://reqres.in'
  constructor(private http:HttpClient) {}
  
  login(data)
  {
    return this.http.post(this.rootUrl +'/api/login',data,{headers:headers1});
  }


}
