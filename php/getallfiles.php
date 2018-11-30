<?php
chdir('../');
$userID = 42;

$targetDir = "uploadedImages/{$userID}/";
$uploadedFiles = glob("$targetDir*");
$outputData = [
	'success'=>true,
	'files' => $uploadedFiles
];
$json_files = json_encode( $outputData );

print($json_files);

?>