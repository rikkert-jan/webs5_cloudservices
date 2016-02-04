// Create server
var http = require("http");
var path = require("path");

http.createServer(function (req,res){
	var path_parts = req.url.split("/");
	var func = path_parts[1]
	var firstOperator = path_parts[2];
	var secondOperator = path_parts[3];
	var result = 0;

	if(path_parts.length === 2 && func == ""){
		res.writeHead(200, {"ContentType" : "text/plain"});
		result =  "==== Calculator ==== \n";
		result += "To make a calculation, you must provide a function and to values like this \n";
		result += "<function>/<first value>/<second value> \n";
		result += "ex: localhost:8080/add/1/1 => 1 (add) \n";
		result += "ex: localhost:8080/sub/10/2 => 8 (substract) \n";
		result += "ex: localhost:8080/mul/2/2 => 4 (multiply) \n";
		result += "ex: localhost:8080/div/10/5 => 2 (divide)";
	}
	else if (path_parts.length < 4 || path_parts.length > 4){
		res.writeHead(404, {"ContentType" : "text/plain"});
		result = "Invalid request: " + req.url;
	}else{
		res.writeHead(200, {"ContentType" : "text/plain"});

		switch(func){
			case "add": result = "Add: " + (+firstOperator + +secondOperator);
						break;
			case "sub": result = "Substract: " + (+firstOperator - +secondOperator);
						break;
			case "mul": result = "Multiply: " + firstOperator * secondOperator;
						break;
			case "div": result = "Divide: " + firstOperator / secondOperator;
						break;
			default: result = "Unknown function: " + func;
		}
	}
	res.end(result);
}).listen(8080);

