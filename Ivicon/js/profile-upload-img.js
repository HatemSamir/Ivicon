// upload image
$(document).ready(function() {
		window.r = new Resumable({
			target:'/api/photo/redeem-upload-token'
		});
		r.assignBrowse(document.querySelectorAll('#personalInfo .upload'));
		r.on('fileAdded', function(file, event){
			var url = URL.createObjectURL(file.file);
			$('#personalInfo .image-preview').attr('src', url);
			$('#personalInfo .initial-state').addClass('hide');
			$('#personalInfo .image-state').removeClass('hide');
			$('#personalInfo .image-name').text(file.file.name);
			$('#personalInfo .delete').attr('uniqueIdentifier', file.uniqueIdentifier);
			r.upload();
		});
		$('#personalInfo .delete').click(function() {
			$('#personalInfo .initial-state').removeClass('hide');
			$('#personalInfo .image-state').addClass('hide');
			$('#personalInfo .image-preview').attr('src', '');
			r.removeFile($(this).attr('uniqueIdentifier'));
		});
		r.on('fileSuccess', function(file, message){
			console.log('file', file)
		});
		r.on('fileError', function(file, message){
			console.log('file', file)
			// alert('FAILED');
		});
})
