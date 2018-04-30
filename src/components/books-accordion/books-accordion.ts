import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { ChapterDetailPage } from '../../pages/chapter-detail/chapter-detail';

@Component({
  selector: 'books-accordion',
  templateUrl: 'books-accordion.html'
})
export class BooksAccordionComponent implements OnInit {
  @Input() book;
  chapters: number[] = [];

  accordionexpanded = false;
  @ViewChild('cardcontent') cardContent: any;
  constructor(
    public renderer: Renderer,
    public modalCtrl: ModalController
  ) {
    
  }

  ngOnInit() {
    for(let i = 0; i < this.book.chapters.length; i++){
      this.chapters.push(i);
    }
    
    this.renderer.setElementStyle(this.cardContent.nativeElement, 'webKitTransition', 'max-height 500ms padding 500ms')
  }

  detailChapter(chapter) {
    let profileModal = this.modalCtrl.create(
      ChapterDetailPage, 
      { 
        chapter: this.book.chapters[chapter],
        bookName: this.book.name,
        chapterNumber: chapter
      }
    );
    profileModal.present();
  }

  toggleAccordion() {
    if(this.accordionexpanded){
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height', '0px');
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'padding', '0px 16px');
    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height', '900px');
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'padding', '13px 16px');
    }

    this.accordionexpanded = !this.accordionexpanded;
  }
}
