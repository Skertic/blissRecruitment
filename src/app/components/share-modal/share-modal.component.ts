import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalShareService } from 'src/app/services/modal-share.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.css']
})
export class ShareModalComponent implements OnInit {
  public isOpen = false;
  public shareEmailControl: FormControl;

  constructor(
    private readonly modalShareService: ModalShareService,
    private readonly router: Router,
    private readonly shareService: ShareService
  ) { 
    this.shareEmailControl = new FormControl('', Validators.email);
  }

  ngOnInit() {
    this.modalShareService.modalSubject.subscribe((isOpen: boolean) => {
      this.shareEmailControl.setValue('');
      this.isOpen = isOpen;
    });
  }

  public onClickCloseModal(): void {
    this.closeModal();
  }

  private closeModal(): void {
    this.modalShareService.close();
  }

  public onClickShare(): void {
    this.shareService.sharePage(this.shareEmailControl.value, this.router.url).subscribe(() => {
      this.closeModal();
    }, () => {
      this.closeModal();
    });
  }
}
