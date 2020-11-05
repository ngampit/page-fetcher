fs = require('fs');
const request = require('request');
const args = process.argv;

let url = args[2];
let file = args[3];
//console.log(url)
//console.log(file)

// request(url, (error,response,body) => {
//     console.log('body',body);
// });


//const request = require('request');
request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(file, body, function (err) {
        if (err) return console.log("write file err");
        console.log('Downloaded and saved 3261 bytes to ./index.html');
      });
});


