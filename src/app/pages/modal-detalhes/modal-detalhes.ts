import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { LivroVolumeInfo } from '../../models/livroVolumeInfo';

@Component({
  imports: [],
  selector: 'app-modal-detalhes',
  styleUrl: './modal-detalhes.scss',
  templateUrl: './modal-detalhes.html',
})
export class ModalDetalhes {
  body = document.querySelector("body");
  
  @Input() livro!: LivroVolumeInfo;
  statusModal = signal(true);
  @Output() mudouModal = new EventEmitter();

  fecharModal() {
    this.statusModal.set(false);
    this.mudouModal.emit(this.statusModal);

    if(this.body) this.body.style.overflow = "scroll";
  }

  esconderScroll(){
    if(this.statusModal() && this.body) {
      this.body.style.overflow = "hidden";
    }
  }
  
  lerPrevia() {
    window.open(this.livro.previewLink, '_blank');
  }
}
