import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {CategoryListComponent} from "./category-list.component";

@Injectable({
  providedIn: 'root'
})


export class CategoryEditService {

  private _categoryListComponent : CategoryListComponent;

  constructor(private notifyMessage : NotifyMessageService) {}

  set categoryListComponent(value: CategoryListComponent) {
    this._categoryListComponent = value;
  }

  showModalEdit(categoryId: number){
    this._categoryListComponent.categoryId = categoryId;
    this._categoryListComponent.categoryEditModal.showModal();
  }

  onEditSuccess($event : any){
    this.notifyMessage.success('Categoria editada com sucesso');
    this._categoryListComponent.getCategories()
    console.log($event)

  }

  onEditError($event: HttpErrorResponse) {
    this.notifyMessage.error('Erro ao editar categoria');
    console.log($event)

  }

}
