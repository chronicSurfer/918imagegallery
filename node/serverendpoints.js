
const express = require('express');

const files = require('express-fileupload');
const fs = require('fs');

const server = express();

server.use(files());

server.use( express.static(__dirname + '/html'));

server.post('/upload', (req, res) => {
	req.files.imageToUpload.mv( __dirname + '/html/fileuploads/' + req.files.imageToUpload.name , error => {
		if(!error){
			getAllFiles( res );
		} else {
			console.log(error);
		}
	})
})

server.post('/getfiles', (req, res)=>{
	getAllFiles( res );
})

function getAllFiles(response){
	const output = {
		success: false,
		files: []
	}
	fs.readdir(__dirname+ '/html/fileuploads', (error, items)=>{
		if(!error){
			output.success = true;
			output.files = items.map( item => 'fileuploads/'+item);
		} 
		response.send(output);
	})
}


server.listen(3500, ()=>{ console.log('server online')});