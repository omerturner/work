import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AnalysisRequest, AnalysisResults } from './analysis-result';

@Injectable()
export class AnalysisService {

  private analysisUrl = 'http://analysis.omgili.com/api/analysis/query';
  constructor(private http: Http) { }

  getResults(requestParams: AnalysisRequest): Observable<AnalysisResults> {
    let bodyString = JSON.stringify(requestParams);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.analysisUrl, bodyString, options)
               .map(this.extractData)
               .catch(this.handleError);
  }
  

  private extractData(res: Response) {
    return {results: res.json()};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
