import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@IonicPage()
@Component({
  selector: 'page-chapter-detail',
  templateUrl: 'chapter-detail.html',
})
export class ChapterDetailPage {
  chapter: any = [];
  bookName: string = '';
  chapterNumber: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverController: PopoverController
  ) {
    this.chapter = navParams.get('chapter');
    this.bookName = navParams.get('bookName');
    this.chapterNumber = navParams.get('chapterNumber');
  }

  selectVersicle(versicle) {
    let popover = this.popoverController.create(PopoverPage);
    popover.present({
      ev: versicle
    });
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
