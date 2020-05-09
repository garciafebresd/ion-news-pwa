import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageLocalService {

  articles: Article[] = [];

  constructor(private storage: Storage) { }

  saveArticle(article: Article) {

    const found = this.articles.find(data => data.title === data.title);

    if (!found) {

      this.articles.unshift(article);
      this.storage.set('favorites', this.articles);
    }

  }

  loadFavorites() {
    // if(){

    // }
  }
}
