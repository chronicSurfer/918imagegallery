<?php

$result = move_uploaded_file($_FILES['imageToUpload']['tmp_name'], '../uploadedImages/' . $_FILES['imageToUpload']['name']);

if($result){
	print("file was uploaded");
} else {
	print("file failed to upload");
}

?>