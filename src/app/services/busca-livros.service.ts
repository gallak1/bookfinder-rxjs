import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LivrosResultado } from '../models/interfaces';

@Injectable({
    providedIn: 'root'
})
export class BuscaLivrosService {
    private readonly googleUrl = 'https://www.googleapis.com/books/v1/volumes';
    private readonly googleKey = 'AIzaSyBslVXbvGILouoNyYe-Bm8GKPYjnAyDr5g';

    constructor(
        private http: HttpClient
    ) {}

    buscarLivros(pesquisa: string): Observable<LivrosResultado> {
        return this.http.get<LivrosResultado>(`${this.googleUrl}?q=${pesquisa}&key=${this.googleKey}`)
            // .pipe(
            //     tap((result) => console.log(result)), //controle do retorno da api, descomentar caso queira debugar
            //     map((result) => result.items)
            // );
    }
}
