var chart = c3.generate({
    data: {
        url: '/data/timeseries-Data.csv'
    ,
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
    
});

