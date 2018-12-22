import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NotifyMessageService } from "../../../../services/notify/notify-message.service";
import { ProductInputListComponent } from "./product-input-list.component";

@Injectable({
  providedIn: 'root'
})


export class ProductInputInsertService {

  private _productInputListComponent : ProductInputListComponent;

  constructor(private notifyMessage : NotifyMessageService) {}

  set ProductInputListComponent(value: ProductInputListComponent) {
    this._productInputListComponent = value;
  }

  showModalInsert(){
    this._productInputListComponent.productInputNewModal.showModal();
  }

  onInsertSuccess($event : any){
    this.notifyMessage.success('Entrada inserida com sucesso.');
    this._productInputListComponent.getInputs();
  }

  onInsertError($event: HttpErrorResponse) {
    this.notifyMessage.error('Erro ao inserir entrada');
    console.log($event)

  }

}
