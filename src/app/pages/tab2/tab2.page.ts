import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

import { NewsService } from '../../services/news.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  articles: Article[] = [];

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {

    const category = this.categories[0];
    this.segment.value = category;
    this.loadNews(category);

  }

  changeCategory(event) {

    const category = event.detail.value;

    this.articles = [];
    this.loadNews(category);

  }

  loadNews(category: string, event?) {

    this.newsService.getTopHeadlinesCategory(category).subscribe((response) => {

      this.articles.push(
        ...response.articles
      );

      if (event) {
        event.target.complete();
      }

    });

  }

  loadData(event) {

    this.loadNews(this.segment.value, event);

  }
}
