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

  headlinesPage = 0;
  currentCategory = '';
  categoryPage = 0;

  constructor(private http: HttpClient) { }


  requestGetQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines() {

    this.headlinesPage++;
    return this.requestGetQuery<TopHeadlines>(`/top-headlines?country=us&page=${this.headlinesPage}`);

  }

  getTopHeadlinesCategory(category: string) {

    if (this.currentCategory === category) {
      this.categoryPage++;
    } else {
      this.categoryPage = 1;
      this.currentCategory = category;
    }

    return this.requestGetQuery<TopHeadlines>(`/top-headlines?country=us&category=${category}&page=${this.categoryPage}`);

  }
}
