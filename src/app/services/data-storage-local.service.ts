import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models/article.model';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataStorageLocalService {

  articles: Article[] = [];

  constructor(private storage: Storage,
              private toastController: ToastController) {

    this.loadFavorites();
  }

  async loadFavorites() {

    const favorites = await this.storage.get('favorites');
    if (favorites) {
      this.articles = favorites;
    }

  }

  saveArticle(article: Article) {

    const found = this.articles.find(data => data.title === article.title);

    if (!found) {

      this.articles.unshift(article);
      this.storage.set('favorites', this.articles);
      this.toastFavorite('Added to favorites');
    }

  }

  removeArticle(article: Article){

    this.articles = this.articles.filter(data => data.title !== article.title);
    this.storage.set('favorites', this.articles);
    this.toastFavorite('Removed from favorites');
  }


  async toastFavorite(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
