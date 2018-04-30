import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapterDetailPage } from './chapter-detail';

@NgModule({
  declarations: [
    ChapterDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChapterDetailPage),
  ],
})
export class ChapterDetailPageModule {}
