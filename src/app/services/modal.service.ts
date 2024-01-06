// modal.service.ts
import { Injectable, Injector, ComponentRef } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { ModalComponent } from '../utils/modal/modal.component';
import { modalData } from '../models/ui';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private successModal: boolean = false;

  constructor(private injector: Injector) { }

  public isSuccessModalActive(): boolean {
    return this.successModal;
  }

  public showSuccessModal(data: modalData): void {
    // Create element
    const ModalElement = createCustomElement(ModalComponent, { injector: this.injector });
    // Create a custom element
    customElements.define('custom-modal', ModalElement);

    // Create an instance of the element
    const modal: NgElement & WithProperties<ModalComponent> = document.createElement('custom-modal') as any;

    // Set properties
    modal.modalData = data;

    // Add the custom element to the body
    document.body.appendChild(modal);
    this.successModal = true;

    console.log('showing modal');
    console.log(modal);
  }

  public hideSuccessModal(): void {
    const modal = document.querySelector('custom-modal');
    if (modal) {
      document.body.removeChild(modal);
    }
    this.successModal = false;
  }
}
