import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {

    this.loadTopHeadlines();

  }

  loadData(event) {

    console.log('loadData infinite scroll');

    this.loadTopHeadlines(event);
  }

  loadTopHeadlines(event?) {

    this.newsService.getTopHeadlines().subscribe((response) => {

      this.articles.push(
        ...response.articles
      );

      if (event) {

        event.target.complete();

        if (response.articles.length === 0) {
          event.target.disabled = true;
        }

      }

    });

  }

}
