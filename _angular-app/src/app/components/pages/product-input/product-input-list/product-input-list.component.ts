import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductInputHttpService} from "../../../../services/http/product-input-http.service";
import {ProductInputInsertService} from "./product-input-insert.service";
import {ProductInput} from "../../../../model";
import {ProductInputNewModalComponent} from "../product-input-new-modal/product-input-new-modal.component";

@Component({
  selector: 'product-input-list',
  templateUrl: './product-input-list.component.html',
  styleUrls: ['./product-input-list.component.css']
})
export class ProductInputListComponent implements OnInit {

  productsInputs : Array<ProductInput> = [];
  pagination = {
    page : 1,
    totalItems: 0,
    itemsPerPage: 5
  };

  sortColumn = {column: '', sort: ''};


  @ViewChild(ProductInputNewModalComponent)
  productInputNewModal: ProductInputNewModalComponent;

  public productInputId : number;
  searchText: string;

  constructor(private productInputHttp: ProductInputHttpService,
              protected productInputInsertService: ProductInputInsertService) {
    this.productInputInsertService.ProductInputListComponent = this;
  }

  ngOnInit() {
    this.getInputs()
  }

  getInputs() {
    this.productInputHttp.list({
      page: this.pagination.page,
      sort: this.sortColumn.column === '' ? null : this.sortColumn,
      search: this.searchText
    })
      .subscribe(response => {
        this.productsInputs = response.data;
        this.pagination.totalItems = response.meta.total;
        this.pagination.itemsPerPage = response.meta.per_page;
      });
  }

  pageChanged(page) {
    this.pagination.page = page;
    this.getInputs();
  }

  sort(sortColumn){
    this.getInputs();
  }

  search(search) {
    this.searchText = search;
    this.getInputs()
  }

}
