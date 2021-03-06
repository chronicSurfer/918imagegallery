
$(document).ready(startApp);


function startApp(){
	getAllFiles();
	initializeHandlers();
}

function initializeHandlers(){
	$("#uploadfile").click( uploadFileToServer );
}

function uploadFileToServer(){

	const formData = new FormData( document.querySelector('#uploadForm'));
	$.ajax({
		url: '/upload',
		data: formData,
		mimeType: 'multipart/form-data',
		contentType: false,
		processData: false,
		dataType: 'json',
		type: 'POST',
	}).then( handleFileUploadSuccess )
}

function getAllFiles(){
	$.ajax({
		url: '/getfiles',
		dataType: 'json',
		type: 'POST',
	}).then( handleFileUploadSuccess )	
}

function handleFileUploadSuccess( response ){
	if( response.success ){
		const fileElements = [];
		for(var fileI=0; fileI < response.files.length; fileI++ ){
			fileElements.push( makeImage( response.files[fileI] ));
		}
		//const fileElements2 = response.files.map( makeImage );
		$("#gallery").empty().append( fileElements );
	}
}

function makeImage( url ){
	var a = $("<a>",{
		href: url,
		'class': 'galleryLink'
	})
	var img = $("<img>",{
		src: url,
		'class': 'galleryImage'
	})
	a.append(img);
	return a;
}









