import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';

import { DataStorageLocalService } from '../../services/data-storage-local.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() indice: number;

  constructor(private iab: InAppBrowser,
              private socialSharing: SocialSharing,
              private actionSheetController: ActionSheetController,
              private dataStorageLocalService: DataStorageLocalService) { }

  ngOnInit() { }

  openActicle() {
    // el segundo argumento '_system' es para que abra el navegador por defecto
    const browser = this.iab.create(this.article.url, '_system');
  }

  async launchMenu() {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Actions',
      buttons: [{
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {

          console.log('Share clicked');
          this.socialSharing.share(
            this.article.title,
            this.article.source.name,
            '',
            this.article.url
          );

        }
      }, {
        text: 'Favorite',
        icon: 'star-outline',
        cssClass: 'action-dark',
        handler: () => {

          console.log('Favorite clicked');
          this.dataStorageLocalService.saveArticle(this.article);

        }
      }, {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
