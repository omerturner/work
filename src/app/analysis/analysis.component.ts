import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AnalysisService } from '../analysis.service'
import { AnalysisRequest, AnalysisResults } from '../analysis-result';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  fields: string[] = ['country', 'language', 'site', 'site_full', 'site_type']
  request = new AnalysisRequest([{'field': 'country', 'value': 'US'}], 'language', 10, -1);
  resultsArray: AnalysisResults[] = [];
  processing: boolean = false;

  constructor(private analysisService: AnalysisService) { }

  ngOnInit() {
  }

  getResults(): void {
    this.processing = true;
    let resultsArray = this.resultsArray;
    let currentRequest = new AnalysisRequest(this.request['terms'], this.request['facets'], this.request['size'], this.request['isFirst']);
    let terms: string[] = [];
    for (let term of currentRequest['terms']) {
      terms.push(`${term.field}: ${term.value}`);
    }
    let joinedTerms = terms.join(" , ");
    this.analysisService.getResults(currentRequest)
        .subscribe(results => {
            this.processing = false;
            results['description'] = `${joinedTerms} by ${currentRequest['facets']} (is_first:${currentRequest['isFirst']})`;
            resultsArray.push(results);
          },
          error =>  console.log(error)
        )
  }

  addTerm(): void {
    this.request['terms'].push({'field': 'country', 'value': 'US'});
  }

  removeTerm(index: number): void {
    this.request['terms'].splice(index, 1);
  }

  removeResults(index: number): void {
    this.resultsArray.splice(index, 1);
  }

}
