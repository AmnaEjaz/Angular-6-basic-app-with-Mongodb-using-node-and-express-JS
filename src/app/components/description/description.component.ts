import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {


  adunit: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adunitservice.editAdUnit(params['id']).subscribe(res => {
        this.adunit = res;
    });
  });
}
}
