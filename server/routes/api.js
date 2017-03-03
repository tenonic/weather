const express = require('express');
const router = express.Router();
var request = require("request");
var parseString = require('xml2js').parseString;

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/test', (req, res) => {
    res.send({test: 'works'});
});

router.get('/weathercast/:cityId',  function (req, res) {
    console.log('weathercast get route');
    request("http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/ON/" + req.params.cityId + "_e.xml", function (error, response, body) {
        var xml = body;

        // var json = parser.toJson(xml);
        // res.send(json);

        parseString(xml, function (err, result) {
            //console.log(result);
            //res.send(result.siteData.currentConditions[0].temperature[0]._);
            res.send(result.siteData);
            
        });
    });
});

module.exports = router;