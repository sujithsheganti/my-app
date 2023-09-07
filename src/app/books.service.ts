import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _httpClient:HttpClient) { }
 getbooks():Observable<any>{
  return this._httpClient.get("https://s3.amazonaws.com/api-fun/books.json")
 }

}
