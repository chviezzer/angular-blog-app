import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewPostService {

  constructor(private http: HttpClient) { }

  getAllPost(){
    return this.http.post('/api/post/getAllPost', {})
  }
}
