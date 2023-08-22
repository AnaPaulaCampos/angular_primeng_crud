import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface Book {
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  
  constructor(private http: HttpClient) {}

  getBuscaCompleta(): any {
    return this.http.get<Book[]>('assets/books.json');
  }
}
