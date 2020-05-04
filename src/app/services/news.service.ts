import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopHeadlines } from '../models/top-headlines.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.get<TopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dca65f8510d54a0ba6e141d7a4cdbab6`);
  }
}
