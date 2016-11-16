class Result {
  term: string;
  count: number;
} 

export class AnalysisResults {
  constructor(private description: string, private results: Result[]) {}
}

class Term {
  field: string;
  value: string;
}

export class AnalysisRequest {
  constructor(private terms: Term[], private facets: string, private size: number, private isFirst: any) {}
}
