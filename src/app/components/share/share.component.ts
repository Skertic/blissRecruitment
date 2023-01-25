import { Component } from '@angular/core';
import { ModalShareService } from 'src/app/services/modal-share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  /**
   * Creates an instance of share component.
   * @param modalShareService 
   */
  constructor(
    private readonly modalShareService: ModalShareService,
  ) { }

  /**
   * Opens Share modal
   */
  public onClickSharePage(): void {
    this.modalShareService.open();
  }
}
