import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() indice: number;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() { }

  openActicle() {
    // el segundo argumento '_system' es para que abra el navegador por defecto
    const browser = this.iab.create(this.article.url, '_system');
  }

}
