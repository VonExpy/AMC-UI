import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef }) entry!: ViewContainerRef;
  modalDetails: any = {
    heading: '',
    action: '',
    size: ''
  }
  constructor(private sharedService: SharedService,
    private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.sharedService.modalObservable.subscribe((res) => {
      console.log(res,'res')
      this.modalDetails = res
      if (res.action == 'open') {
        this.openModal(res)
      }
    }
    );
  }

  openModal(res: any) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(res.component);
    this.entry.createComponent(factory);
  }

  closeModal(){
    this.modalDetails.action = 'close'
  }
}
