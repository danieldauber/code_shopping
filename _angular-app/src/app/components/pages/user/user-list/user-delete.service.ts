import {Injectable} from "@angular/core";
import {NotifyMessageService} from "../../../../services/notify/notify-message.service";
import {UserListComponent} from "./user-list.component";

@Injectable({
  providedIn: 'root'
})

export class UserDeleteService {

  private _userListComponent : UserListComponent;

  constructor(private notifyMessage : NotifyMessageService) {}

  set userListComponent(value: UserListComponent) {
    this._userListComponent = value;
  }

  showModalDelete(userId: number){
    this._userListComponent.userId = userId;
    this._userListComponent.userDeleteModal.showModal();
  }


  onDeleteSuccess($event : any){
    this.notifyMessage.success('Produto excluido com sucesso');
    this._userListComponent.getUsers();
    console.log($event);
  }

  onDeleteError() {
    this.notifyMessage.error('Não foi possivel excluir o produto.');
  }

}
