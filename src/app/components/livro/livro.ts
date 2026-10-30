import { Component, Input, signal } from '@angular/core';
import { ModalDetalhes } from '../../pages/modal-detalhes/modal-detalhes';
import { LivroVolumeInfo } from '../../models/livroVolumeInfo';

@Component({
  imports: [ModalDetalhes],
  selector: 'app-livro',
  styleUrl: './livro.scss',
  templateUrl: './livro.html',
})
export class LivroCard {
  @Input() livro!: LivroVolumeInfo;
  modalAberto = signal(false);
}
