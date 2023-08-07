var cheerio = require("cheerio");
var request = require("request");
const options = {
    url: 'https://www.oilprice.com',
    headers: {
      'User-Agent': 'request'
    }
  };
request(options, function(error, response, html) {
    var $ = cheerio.load(html);
    var results = [];
    $("tr.link_oilprice_row").each(function(i, element) {
        var value = $(element).find("td.value");
        var name = $(element).find("td.blend_name");
        results.push({
            value: value.contents()[0].data,
            name: name.contents()[0].data
        });
    });
    console.log(results);
},);

request(options, function(error, response, html) {
  var $ = cheerio.load(html);
  var results = []
})
