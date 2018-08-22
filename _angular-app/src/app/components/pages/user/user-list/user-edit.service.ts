import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {UserListComponent} from "./user-list.component";

@Injectable({
  providedIn: 'root'
})


export class UserEditService {

  private _userListComponent : UserListComponent;

  constructor(private notifyMessage : NotifyMessageService) {}

  set userListComponent(value: UserListComponent) {
    this._userListComponent = value;
  }

  showModalEdit(userId: number){
    this._userListComponent.userId = userId;
    this._userListComponent.userEditModal.showModal();
  }

  onEditSuccess($event : any){
    this.notifyMessage.success('Produto editado com sucesso');
    this._userListComponent.getUsers()
    console.log($event)

  }

  onEditError($event: HttpErrorResponse) {
    this.notifyMessage.error('Erro ao editar produto');
    console.log($event)

  }

}
