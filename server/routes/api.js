const express = require('express');
const router = express.Router();
var request = require("request");
var parseString = require('xml2js').parseString;
var pg = require('pg');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/test', (req, res) => {
    res.send({ test: 'works' });
});

var conString = process.env.DATABASE_URL
    || "postgres://nkbzizwzkuiokp:472a016ade0325eebbb97037b2f7ca4ec4285eb65e04bd919f8350c18adb36b2@ec2-54-243-187-133.compute-1.amazonaws.com:5432/dhcjqujfnq6mr?ssl=true";

router.get('/Barrie', (req, res) => {

    console.log('barrie get');

    pg.connect(conString, function (err, client, done) {
        client.query('SELECT * FROM city_weather', function (err, result) {
            done();
            if (err)
            { console.error(err); res.send("Error " + err); }
            else {
                //console.log(result.rows) 
                res.send({ results: result.rows });
            }
        });
    });
    //res.send({ test: 'works' });
});


router.get('/weathercast/:cityId', function (req, res) {
    console.log('weathercast city route');
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

router.get('/weathercast/:provinceCode/:cityCode', function (req, res) {
    console.log('weathercast province / city route');
    request("http://dd.weatheroffice.ec.gc.ca/citypage_weather/xml/" + req.params.provinceCode + "/" + req.params.cityCode + "_e.xml", function (error, response, body) {
        var xml = body;

        parseString(xml, function (err, result) {
            console.log(result);
            res.send(result.siteData);

        });
    });
});

module.exports = router;