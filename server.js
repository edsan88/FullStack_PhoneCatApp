//Author:Eduardo Santiago
//Express Init
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static(__dirname+'/app'));
//Mysql Init
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:''
});

var server = app.listen(8000,function(){});

app.get('/phonelist',function(req,res){
		connection.query('SELECT * FROM phone.phone', function(e, rows) {
				res.send(JSON.stringify(rows));
		});
		
});
app.get('/phonedetail/:id', function(req, res){
	 var id = req.params.id;
	connection.query("SELECT phone.*,battery.standbyTime,battery.talkTime,battery.type,android.os,android.ui,availability.list as avail,camera.camera_id,camera.features,camera.primary,connectivity.bluetooth,connectivity.cell,connectivity.gps,connectivity.infrared,connectivity.wifi,display.screenResolution,display.screenSize,display.touchScreen,hardware.accelerometer,hardware.audioJack,hardware.cpu,hardware.fmRadio,hardware.physicalKeyboard,hardware.usb,images.list as images_listed,size_weight.size_weight_id,size_weight.dimensions,size_weight.weight,storage.flash,storage.ram FROM phone.phone INNER JOIN phone.battery ON battery.phone_id=phone.phone_id INNER JOIN phone.android ON android.phone_id=phone.phone_id INNER JOIN phone.availability ON availability.phone_id = phone.phone_id INNER JOIN phone.camera ON camera.phone_id = phone.phone_id INNER JOIN phone.connectivity ON connectivity.phone_id = phone.phone_id INNER JOIN phone.display ON display.phone_id = phone.phone_id INNER JOIN phone.hardware ON hardware.phone_id = phone.phone_id INNER JOIN phone.images ON images.phone_id = phone.phone_id INNER JOIN phone.size_weight ON size_weight.phone_id=phone.phone_id INNER JOIN phone.storage ON storage.phone_id=phone.phone_id WHERE phone.id = '"+id+"'", function(e, rows) {
			//res.send(JSON.stringify(rows));
			var additionalFeatures = rows[0].additionalFeatures;
			var android = '{"os":"'+rows[0].os+'","ui":"'+rows[0].ui+'"}';
			var availability = '["'+rows[0].avail+'"]';
			var battery = '{"standbyTime":"'+rows[0].standbyTime+'","talkTime":"'+rows[0].talkTime+'","type":"'+rows[0].type+'"}';
			var features = [rows[0].features];
			var camera = '{"features":'+JSON.stringify(features)+',"primary": "'+rows[0].primary+'"}';
			var connectivity = '{"bluetooth": "'+rows[0].bluetooth+'","cell": "'+rows[0].cell+'","gps":'+rows[0].gps+',"infrared":'+rows[0].infrared+',"wifi":"'+rows[0].wifi+'"}';
			var display = '{"screenResolution": "'+rows[0].screenResolution+'","screenSize": "'+rows[0].screenSize+'","touchScreen":'+rows[0].touchScreen+'}';
			var hardware = '{"accelerometer":'+rows[0].accelerometer+',"audioJack": "'+rows[0].audioJack+'","cpu": "'+rows[0].cpu+'","fmRadio": '+rows[0].fmRadio+',"physicalKeyboard": '+rows[0].physicalKeyboard+',"usb": "'+rows[0].usb+'"}';
			var images = rows[0].images_listed;
			var img_list = images.split(",");
			var dimensions = rows[0].dimensions;
			var dimensions_split = dimensions.split(",");
			var sizeAndWeight = '{"dimensions":'+JSON.stringify(dimensions_split)+',"weight": "'+rows[0].weight+'"}';
			var storage = '{"flash":"'+rows[0].flash+'","ram":"'+rows[0].ram+'"}';
			res.send('{"additionalFeatures":"'+additionalFeatures+
						'","android":'+android+
						',"availability":'+availability+
						',"battery":'+battery+
						',"camera":'+camera+
						',"connectivity":'+connectivity+
						',"description":"'+rows[0].description+
						'","display":'+display+
						',"hardware":'+hardware+
						',"id":"'+rows[0].id+
						'","images":'+JSON.stringify(img_list)+
						',"name":"'+rows[0].name+'","sizeAndWeight":'+sizeAndWeight+',"storage":'+storage+'}');
	});

});
app.get('/phonedetail/update/:id', function(req, res){
	var id = req.params.id;
	var scope_list = id.split("|");
	connection.query("SELECT phone.phone_id FROM phone.phone WHERE phone.id = '"+scope_list[0]+"'",function(e,r){
		var sql_query = "UPDATE phone.phone ";
		sql_query += " SET phone.description = '"+scope_list[2]+"',";
		sql_query += " phone.name = '"+scope_list[1]+"',";
		sql_query += " phone.additionalFeatures = '"+scope_list[3]+"'";
		sql_query += " WHERE phone.phone_id ='"+r[0].phone_id+"'";
		connection.query(sql_query,function(error,rows){
			if(error){
				console.log('Error Phone Update');
			}else{

				console.log('Phone Updated:');
			}
		});
		//
		var avail = "UPDATE phone.availability SET availability.list = '"+scope_list[4]+"' WHERE availability.phone_id = '"+r[0].phone_id+"'";
		connection.query(avail,function(error,rows){
			if(error){
				console.log('Error Availability Update');
			}else{
				console.log('Phone Availability Updated:');
			}
		});
		//
		var battery = "UPDATE phone.battery SET battery.standbyTime = '"+scope_list[7]+"',battery.talkTime = '"+scope_list[6]+"',battery.type = '"+scope_list[5]+"' WHERE battery.phone_id = '"+r[0].phone_id+"'";
		connection.query(battery,function(error,rows){
			if(error){

				console.log('Error');
			}else{

				console.log('Phone Battery Updated:');
			}
		});
		//
		var storage = "UPDATE phone.storage SET storage.flash = '"+scope_list[9]+"',storage.ram = '"+scope_list[8]+"' WHERE storage.phone_id = '"+r[0].phone_id+"'";
		connection.query(storage,function(error,rows){
			if(error){
				console.log('Error Storage Update');
			}else{
				console.log('Phone Storage Updated:');
			}
		});
		//
		var connectivity = "UPDATE phone.connectivity SET connectivity.cell = '"+scope_list[10]+"',connectivity.wifi = '"+scope_list[11]+"',connectivity.bluetooth = '"+scope_list[12]+"',connectivity.infrared = '"+scope_list[13]+"',connectivity.gps = '"+scope_list[14]+"' WHERE connectivity.phone_id = '"+r[0].phone_id+"'";
		connection.query(connectivity,function(error,rows){
			if(error){
				console.log('Error Connectivity Update');
			}else{
				console.log('Phone Connectivity Updated:');
			}
		});
		//
		var android = "UPDATE phone.android SET android.os = '"+scope_list[15]+"',android.ui = '"+scope_list[16]+"' WHERE android.phone_id = '"+r[0].phone_id+"'";
		connection.query(android,function(error,rows){
			if(error){
				console.log('Error Android Update');
			}else{
				console.log('Phone Android Updated:');
			}
		});
		//
		var sizeandweight = "UPDATE phone.size_weight SET size_weight.dimensions = '"+scope_list[17]+"',size_weight.weight = '"+scope_list[18]+"' WHERE android.phone_id = '"+r[0].phone_id+"'";
		connection.query(sizeandweight,function(error,rows){
			if(error){
				console.log('Error Size and Weight Update');
			}else{
				console.log('Phone Size and Weight Updated:');
			}
		});
		//
		var display = "UPDATE phone.display SET display.screenSize = '"+scope_list[19]+"',display.screenResolution = '"+scope_list[20]+"',display.touchScreen = '"+scope_list[21]+"' WHERE display.phone_id = '"+r[0].phone_id+"'";
		connection.query(display,function(error,rows){
			if(error){
				console.log('Error Display Update');
			}else{
				console.log('Phone Display Updated:');
			}
		});
		//
		var hardware = "UPDATE phone.hardware SET hardware.cpu = '"+scope_list[22]+"',hardware.usb = '"+scope_list[23]+"',hardware.audioJack = '"+scope_list[24]+"',hardware.fmRadio = '"+scope_list[25]+"',hardware.accelerometer = '"+scope_list[26]+"' WHERE hardware.phone_id = '"+r[0].phone_id+"'";
		connection.query(hardware,function(error,rows){
			if(error){
				console.log('Error Hardware Update');
			}else{
				console.log('Phone Hardware Updated:');
			}
		});
		//
		var camera = "UPDATE phone.camera SET camera.primary = '"+scope_list[27]+"',camera.features = '"+scope_list[28]+"' WHERE camera.phone_id = '"+r[0].phone_id+"'";
		connection.query(camera,function(error,rows){
			if(error){
				console.log('Error Camera Update');
			}else{
				console.log('Phone Camera Updated:');
			}
		});
	});	
});

