import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}