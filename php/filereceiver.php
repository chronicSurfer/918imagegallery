<?php
chdir('../');
$userID = 42;

$targetDir = "uploadedImages/{$userID}/";
if(!file_exists($targetDir)){
	mkdir($targetDir);
}

$result = move_uploaded_file($_FILES['imageToUpload']['tmp_name'], $targetDir . $_FILES['imageToUpload']['name']);


if($result){
	$uploadedFiles = glob("$targetDir*");
	$outputData = [
		'success'=>true,
		'files' => $uploadedFiles
	];
	$json_files = json_encode( $outputData );

	print($json_files);
} else {
	print( json_encode( ['success'=>false]));
}




?>