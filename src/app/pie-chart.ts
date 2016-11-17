class Term {
    constructor(public name: string, public y: number) {}
}


export class PieChart {
    public options = {};

    constructor(title: string, fields: any) {
        let terms: Term[] = [];
        for (let i in fields) {
            terms.push(new Term(fields[i]['term'], fields[i]['count']));
        }
        this.options = {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: title
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: 'black'
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: terms
                    }]
                }
    }
}
