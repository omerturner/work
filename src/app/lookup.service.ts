import { Injectable } from '@angular/core';

import { LookupResult } from './lookup-result';

@Injectable()
export class LookupService {

  private mok: LookupResult = {
    count: 14567,
    subDomains: [
      { term: 'www.dailymail.co.uk', count: 1423 },
      { term: 'sport.dailymail.co.uk', count: 132 },
      { term: 'news.dailymail.co.uk', count: 87 }
    ],
    parsers: [
      { term: 'buzzilla.c_dailymail_articles', count: 1300 },
      { term: 'buzzilla.c_rssExtractor', count: 150 },
      { term: 'buzzilla.c_rssExtractor_pubsub', count: 7 }
    ]
  }

  constructor() { }

  lookupByDomain(domain): LookupResult {
    return this.mok;
  }

}
