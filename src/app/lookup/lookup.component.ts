import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { LookupService } from '../lookup.service';
import { LookupResult } from '../lookup-result';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  private searchForm: FormGroup;
  private currentLookupResult: LookupResult;

  constructor(private formBuilder: FormBuilder,
              private lookupService: LookupService) { }

  ngOnInit() {
    this.initializeSearchForm();
  }

  initializeSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      domain: ['', Validators.compose([
          Validators.pattern('\\w+\\.\\w{2,3}(\\.\\w{2,3})?'),
          Validators.minLength(1)
        ])
      ]
    });
  }

  lookup() {
    let source = this.searchForm['_value']['domain'];
    if (source.length > 2) {
      this.searchForm['_value']['domain'] = '';
      this.currentLookupResult = this.lookupService.lookupByDomain(source);
    }
  }

}
