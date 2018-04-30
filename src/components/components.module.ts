import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

import { BooksAccordionComponent } from './books-accordion/books-accordion';

@NgModule({
	declarations: [BooksAccordionComponent],
	imports: [CommonModule],
	exports: [BooksAccordionComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
