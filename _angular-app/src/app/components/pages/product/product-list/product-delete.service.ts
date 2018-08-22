import {Injectable} from "@angular/core";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {ProductListComponent} from "./product-list.component";

@Injectable({
  providedIn: 'root'
})

export class ProductDeleteService {

  private _productListComponent : ProductListComponent;

  constructor(private notifyMessage : NotifyMessageService) {}

  set productListComponent(value: ProductListComponent) {
    this._productListComponent = value;
  }

  showModalDelete(productId: number){
    this._productListComponent.productId = productId;
    this._productListComponent.productDeleteModal.showModal();
  }


  onDeleteSuccess($event : any){
    this.notifyMessage.success('Produto excluido com sucesso');
    this._productListComponent.getProducts();
    console.log($event);
  }

  onDeleteError() {
    this.notifyMessage.error('Não foi possivel excluir o produto.');
  }

}
