import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(private _httpClient:HttpClient) {}

getUsers():Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
}
getfilteredusers(term:any):Observable<any>{
 return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
}
getsortedusers(column:any,order:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order)


} 

deleteusers(id:any):Observable<any>{
   return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/" + id);
 }
 getpagedusers(limit:any,page:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page )
 }
createuser(data:any):Observable<any>{
  return this._httpClient.post("https://612 8991386a213001729f9df.mockapi.io/test/v1/student",data)
}

}
  