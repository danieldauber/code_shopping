import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {CategoryListComponent} from "./category-list.component";

@Injectable({
  providedIn: 'root'
})


export class CategoryInsertService {

  private _categoryListComponent : CategoryListComponent;

  constructor(private notifyMessage : NotifyMessageService) {}

  set categoryListComponent(value: CategoryListComponent) {
    this._categoryListComponent = value;
  }

  showModalInsert(){
    this._categoryListComponent.categoryNewModal.showModal();

  }

  onInsertSuccess($event : any){
    this.notifyMessage.success('Categoria inserida com sucesso.');
    this._categoryListComponent.getCategories();
  }

  onInsertError($event: HttpErrorResponse) {
    this.notifyMessage.error('Erro ao inserir categoria');
    console.log($event)

  }

}
