var args = process.argv;
const puppeteer = require('puppeteer');
var fs = require('fs');
var fsp = require('fs-promise');

const data = [];

//READ IN CSV OF URLS
//PARSE THROUGH THEM
//PUT THEM IN AN ARRAY

//LOOP THROUGH IT WITH FUNCTION

function checkArg(){
	if(args.length !== 3){
		console.log("usage: node sim_web.js <loc of file>");
		process.exit();
	}
	else {
		file_location = args[2];
	}
}

function openFile(){
	return fsp.readFile(file_location, 'utf8').then(function(contents,err){
	  	if (err) {
	  		if (err.code === 'ENOENT') {
	  			console.log('File not found!');
			}
			else{
				console.log(err);
			}
			process.exit();
		  }
	  	return contents.replace( /\n/g, " " ).split(" ");
	});
}

const gatherData = function(){
    const dataObj = {};
    //For loop that writes to data object
}

const getData = async () => {
  const browser = await puppeteer.launch({
      headless: false,
  });
  const page = await browser.newPage();
  await page.goto('http://themichaelwilson.com');
  // await page.screenshot({path: 'example.png'});
  await page.evaluate(() => {
      //look for val
        //if val exists, pull this information and store in variable
      //else, return "is passback, ignore"
      //
  })
  await browser.close();
};

checkArg();
openFile().then(() => {
    getData();
    //print data to csv
});

console.log("hogan is a sweet sweet man");