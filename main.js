
$(document).ready(startApp);


function startApp(){
	initializeHandlers();
}

function initializeHandlers(){
	$("#uploadfile").click( uploadFileToServer );
}

function uploadFileToServer(){

	const formData = new FormData( document.querySelector('#uploadForm'));
	$.ajax({
		url: 'php/filereceiver.php',
		data: formData,
		mimeType: 'multipart/form-data',
		contentType: false,
		processData: false,
		type: 'POST',
	}).then( handleFileUploadSuccess )
}

function handleFileUploadSuccess(){
	console.log('success!')
}