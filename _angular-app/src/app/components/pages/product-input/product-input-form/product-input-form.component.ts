import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import fieldsOptions from "../../product-input/product-input-form/product-input-fields-options";
import {FormGroup} from "@angular/forms";
import {ProductIdFieldsService} from "./product-id-fields.service";
import {Select2Component} from "ng2-select2";

@Component({
  selector: 'product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {

  @Input()
  form: FormGroup;
  @ViewChild(Select2Component, {read: ElementRef})
  select2Element: ElementRef;

  constructor(private changeRef: ChangeDetectorRef,
              public productIdField: ProductIdFieldsService) { }

  ngOnInit() {
    this.productIdField.make(this.select2Element)
  }

  ngOnChanges(){
    this.changeRef.detectChanges();

  }

  get fieldOptions(): any {
    return fieldsOptions
  }

}
