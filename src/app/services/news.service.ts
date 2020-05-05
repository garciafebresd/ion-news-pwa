import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopHeadlines } from '../models/top-headlines.model';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  requestGetQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines() {
    return this.requestGetQuery<TopHeadlines>(`/top-headlines?country=us`);
  }

  getTopHeadlinesCategory(category: string) {
    return this.requestGetQuery<TopHeadlines>(`/top-headlines?country=us&category=${category}`);
  }
}
