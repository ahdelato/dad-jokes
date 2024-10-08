import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchParams } from '../../types';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  fetchData(url: string, params?: SearchParams){
    const headers = new HttpHeaders({"Accept": "application/json"});
    return this.httpClient.get(url, {headers, params});
  }

  getData(url: string){ // for server.js (doesnt use headers)
    return this.httpClient.get(url);
  }

  putData(url: string){
    return this.httpClient.put(url, null);
  }
}
