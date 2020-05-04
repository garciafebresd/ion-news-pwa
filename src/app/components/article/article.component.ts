import { Component, OnInit, Input } from '@angular/core';

import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() indice: number;

  constructor() { }

  ngOnInit() {}

}
