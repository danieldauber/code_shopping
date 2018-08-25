import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductDeleteModalComponent} from "../../product/product-delete-modal/product-delete-modal.component";
import {ProductEditService} from "../../product/product-list/product-edit.service";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ProductNewModalComponent} from "../../product/product-new-modal/product-new-modal.component";
import {ProductEditModalComponent} from "../../product/product-edit-modal/product-edit-modal.component";
import {ProductInsertService} from "../../product/product-list/product-insert.service";
import {ProductDeleteService} from "../../product/product-list/product-delete.service";
import {Product} from "../../../../model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Array<Product> = [];
  pagination = {
    page : 1,
    totalItems: 0,
    itemsPerPage: 2
  }

  @ViewChild(ProductNewModalComponent)
  productNewModal: ProductNewModalComponent;

  @ViewChild(ProductEditModalComponent)
  productEditModal: ProductEditModalComponent;

  @ViewChild(ProductDeleteModalComponent)
  productDeleteModal: ProductDeleteModalComponent;

  public productId : number;

  constructor(private productHttp: ProductHttpService,
              protected productInsertService: ProductInsertService,
              protected productEditService: ProductEditService,
              protected productDeleteService: ProductDeleteService) {
    this.productInsertService.productListComponent = this;
    this.productEditService.productListComponent = this;
    this.productDeleteService.productListComponent = this;
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productHttp.list({page: this.pagination.page})
      .subscribe(response => {
        this.products = response.data;
        this.pagination.totalItems = response.meta.total;
        this.pagination.itemsPerPage = response.meta.per_page;
      });
  }

  pageChanged(page) {
    this.pagination.page = page;
    this.getProducts();
  }

}
