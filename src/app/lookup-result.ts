class term {
    constructor(public term: string, public count: number) {}
}

export class LookupResult {
    constructor(public count: number,
                public subDomains: term[],
                public parsers: term[],
                public siteTypes: term[] ) { }
}
