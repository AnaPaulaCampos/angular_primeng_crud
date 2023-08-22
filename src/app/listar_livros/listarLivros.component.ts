import { Component, OnInit } from '@angular/core';
import { LivrosService, Book } from './livros.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './listarLivros.component.html',
  styleUrls: ['./listarLivros.component.css'],
})
export class LivrosComponent implements OnInit {

  books: Book[];

  constructor(private bookService: LivrosService) {}

  ngOnInit() {
    this.getTodosLivros();
  }

  getTodosLivros() {
    this.bookService.getBuscaCompleta().subscribe(
      resultado => {
      this.books = resultado.data;
    }
    );
  }

  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
  }
}
