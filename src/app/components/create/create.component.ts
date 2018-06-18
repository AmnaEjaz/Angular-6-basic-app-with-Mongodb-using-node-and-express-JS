import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      description: ['', Validators.required ],
      image: ['', Validators.required ],
      currency: ['', Validators.required ],
      link: ['', Validators.required ]
   });
   
   
  }
  
  addAdUnit(name, price, description, image,currency,link) {
    this.adunitservice.addAdUnit(this.angForm.value.name, this.angForm.value.price, this.angForm.value.description, this.angForm.value.image, this.angForm.value.currency,this.angForm.value.link);
}
  ngOnInit() {
  }
}
