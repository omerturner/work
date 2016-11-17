import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { LookupService } from '../lookup.service';
import { LookupResult } from '../lookup-result';
import { PieChart } from '../pie-chart'

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  private searchForm: FormGroup;
  private currentSource: string;
  private currentLookupResult: LookupResult;
  private processing: boolean = false;
  private pies: PieChart[] = [];

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
      this.currentSource = source;
      this.processing = true;
      this.searchForm['_value']['domain'] = '';
       this.lookupService.lookupByDomain(source).subscribe(
          response  => {
            this.processing = false;
            this.pies = [];
            if (response.count > 0) {
              this.currentLookupResult = response;
              this.pies.push(new PieChart("Site Types", this.currentLookupResult.siteTypes));
              this.pies.push(new PieChart("Sub-Domains", this.currentLookupResult.subDomains));
              this.pies.push(new PieChart("Parsers", this.currentLookupResult.parsers));
            } else {
              this.currentSource += ' has no documents';
              this.currentLookupResult = new LookupResult(0, [], [], []);
            }
          },
          error =>  {
            this.processing = false;
          }
        )
    }
  }

}
