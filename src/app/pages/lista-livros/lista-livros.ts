import { Component, inject, signal } from '@angular/core';
import { BuscaLivrosService } from '../../services/busca-livros.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Item, Livro, LivrosResultado } from '../../models/interfaces';
import { LivroCard } from '../../components/livro/livro';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LivroVolumeInfo } from '../../models/livroVolumeInfo';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, of, startWith, switchMap, map } from 'rxjs';
import { EmptyBooklistWpp } from '../../components/empty-booklist-wpp/empty-booklist-wpp';

@Component({
  imports: [LivroCard, ReactiveFormsModule, EmptyBooklistWpp],
  selector: 'app-lista-livros',
  styleUrl: './lista-livros.scss',
  templateUrl: './lista-livros.html',
})
export class ListaLivros {
  private buscaLivrosService = inject(BuscaLivrosService);

  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly qntResultados = signal<number>(0)
  readonly listaLivros = toSignal<LivroVolumeInfo[]>(
    this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(termo => {
        const busca = termo?.trim() ?? '';
        
        if (!busca) {
          return of<LivroVolumeInfo[]>([]);
        }

        return this.buscaLivrosService.buscarLivros(busca)
          .pipe(
            map((resultado) => {
              this.qntResultados.set(resultado.totalItems);
              return this.livrosResultadoParaLivros(resultado.items)
            }),
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return of();
            })
          );
      })
    )
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => new LivroVolumeInfo(item));
  }
}
