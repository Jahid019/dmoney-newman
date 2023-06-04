const newman = require('newman');
 
newman.run({
    //collection: require("./collection/dmoney.json"),
    collection:"https://api.postman.com/collections/24973005-30f8fb89-60c9-4e37-8b09-0d5cd92160a7?access_key=PMAT-01H129KER7562NRT6B2A3PNXFC",
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});