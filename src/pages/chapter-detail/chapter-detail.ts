import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

import { LottieAnimationViewModule } from 'ng-lottie';

@IonicPage()
@Component({
  selector: 'page-chapter-detail',
  templateUrl: 'chapter-detail.html',
})
export class ChapterDetailPage {
  chapter: any = [];
  bookName: string = '';
  chapterNumber: string = '';
  lottieConfig:any;
  marks: number[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverController: PopoverController
  ) {
    this.chapter = navParams.get('chapter');
    this.bookName = navParams.get('bookName');
    this.chapterNumber = navParams.get('chapterNumber');
    LottieAnimationViewModule.forRoot();
  }

  selectVersicle(versicle) {
    let popover = this.popoverController.create(PopoverPage);
    popover.present({
      ev: versicle
    });

    popover.onDidDismiss(data => {
      this.lottieConfig = {
        path: 'assets/bookmark.json',
        autoplay: true,
        loop: false
      }
      this.marks.push(versicle)
      setTimeout(() => this.lottieConfig = null, 2000);
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
