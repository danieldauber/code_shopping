import {Component, OnInit, ViewChild} from '@angular/core';
import {UserDeleteModalComponent} from "../../user/user-delete-modal/user-delete-modal.component";
import {User} from "../../../../model";
import {UserInsertService} from "../../user/user-list/user-insert.service";
import {UserDeleteService} from "../../user/user-list/user-delete.service";
import {UserNewModalComponent} from "../../user/user-new-modal/user-new-modal.component";
import {UserEditModalComponent} from "../../user/user-edit-modal/user-edit-modal.component";
import {UserEditService} from "../../user/user-list/user-edit.service";
import {UserHttpService} from "../../../../services/http/user-http.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : Array<User> = [];
  pagination = {
    page : 1,
    totalItems: 0,
    itemsPerPage: 2
  }

  @ViewChild(UserNewModalComponent)
  userNewModal: UserNewModalComponent;

  @ViewChild(UserEditModalComponent)
  userEditModal: UserEditModalComponent;

  @ViewChild(UserDeleteModalComponent)
  userDeleteModal: UserDeleteModalComponent;

  public userId : number;

  constructor(private userHttp: UserHttpService,
              protected userInsertService: UserInsertService,
              protected userEditService: UserEditService,
              protected userDeleteService: UserDeleteService) {
    this.userInsertService.userListComponent = this;
    this.userEditService.userListComponent = this;
    this.userDeleteService.userListComponent = this;
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userHttp.list({page: this.pagination.page})
      .subscribe(response => {
        this.users = response.data;
        this.pagination.totalItems = response.meta.total;
        this.pagination.itemsPerPage = response.meta.per_page;
      });
  }

  pageChanged(page) {
    this.pagination.page = page;
    this.getUsers();
  }

}
