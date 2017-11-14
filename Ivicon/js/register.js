// food restriction radio buttons
$("#normal").attr('checked', 'checked');

jQuery(function () {
	var $contents = $('.contents').hide();
	$($("#normal").data('target')).show()
	$('.trigger').change(function () {
			$contents.hide();
			$($(this).data('target')).show()
	})
})

// food restriction checkboxes
$('.diets label div, .diets label input').click(function(){
		$('.diets label div, .diets label input').not(this).removeClass('unchecked');
    $(this).parent().toggleClass('unchecked');
});
$('.diets label .control_indicator').click(function(){
		$('.diets label .control_indicator').not(this).removeClass('unchecked');
    $(this).parent().toggleClass('unchecked');
});

// add another passport
$('.add-passport').click(function(){
		$(this).parent().parent().find('.another-passport').show();
		$(this).parent().parent().find('.remove-passport').show();
    $(this).hide();
		event.preventDefault();
});

// delete another passport
$('.remove-passport').click(function(){
		$(this).parent().parent().find('.another-passport').hide();
		$(this).parent().parent().find('.add-passport').show();
    $(this).hide();
		event.preventDefault();
});


$('.gender-label input[type="radio"]').change(function() {
	$('.gender-label input[type="radio"]').parent().removeClass('active').end().filter(':checked').parent().addClass('active');
});


$('.diet-label input[type="radio"]').change(function() {
	$(this).parent().parent().find('.diet-label input[type="radio"]').parent().removeClass('active').end().filter(':checked').parent().addClass('active');
});

$('.passport-label input[type="radio"]').change(function() {
	$('.passport-label input[type="radio"]').parent().removeClass('active').end().filter(':checked').parent().addClass('active');
});

// upload image
$(document).ready(function() {
		window.r = new Resumable({
			target:'/api/photo/redeem-upload-token'
		});
		r.assignBrowse(document.querySelectorAll('.user-1 .upload'));
		r.on('fileAdded', function(file, event){
			var url = URL.createObjectURL(file.file);
			$('.user-1 .image-preview').attr('src', url);
			$('.user-1 .initial-state').addClass('hide');
			$('.user-1 .image-state').removeClass('hide');
			$('.user-1 .image-name').text(file.file.name);
			$('.user-1 .delete').attr('uniqueIdentifier', file.uniqueIdentifier);
			r.upload();
		});
		$('.user-1 .delete').click(function() {
			$('.user-1 .initial-state').removeClass('hide');
			$('.user-1 .image-state').addClass('hide');
			$('.user-1 .image-preview').attr('src', '');
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

// upload passport
$(document).ready(function() {
		window.r = new Resumable({
			target:'/api/photo/redeem-upload-token'
		});
		r.assignBrowse(document.querySelectorAll('.upload-passport .upload'));
		r.on('fileAdded', function(file, event){
			var url = URL.createObjectURL(file.file);
			$('.upload-passport .image-preview').attr('src', url);
			$('.upload-passport .initial-state').addClass('hide');
			$('.upload-passport .image-state').removeClass('hide');
			$('.upload-passport .image-name').text(file.file.name);
			$('.upload-passport .delete').attr('uniqueIdentifier', file.uniqueIdentifier);
			r.upload();
		});
		$('.upload-passport .delete').click(function() {
			$('.upload-passport .initial-state').removeClass('hide');
			$('.upload-passport .image-state').addClass('hide');
			$('.upload-passport .image-preview').attr('src', '');
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

// upload visa
$(document).ready(function() {
		window.r = new Resumable({
			target:'/api/photo/redeem-upload-token'
		});
		r.assignBrowse(document.querySelectorAll('.upload-visa .upload'));
		r.on('fileAdded', function(file, event){
			var url = URL.createObjectURL(file.file);
			$('.upload-visa .image-preview').attr('src', url);
			$('.upload-visa .initial-state').addClass('hide');
			$('.upload-visa .image-state').removeClass('hide');
			$('.upload-visa .image-name').text(file.file.name);
			$('.upload-visa .delete').attr('uniqueIdentifier', file.uniqueIdentifier);
			r.upload();
		});
		$('.upload-visa .delete').click(function() {
			$('.upload-visa .initial-state').removeClass('hide');
			$('.upload-visa .image-state').addClass('hide');
			$('.upload-visa .image-preview').attr('src', '');
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

// upload image
$(document).ready(function() {
		window.r = new Resumable({
			target:'/api/photo/redeem-upload-token'
		});
		r.assignBrowse(document.querySelectorAll('.upload-document .upload'));
		r.on('fileAdded', function(file, event){
			var url = URL.createObjectURL(file.file);
			$('.upload-document .image-preview').attr('src', url);
			$('.upload-document .initial-state').addClass('hide');
			$('.upload-document .image-state').removeClass('hide');
			$('.upload-document .image-name').text(file.file.name);
			$('.upload-document .delete').attr('uniqueIdentifier', file.uniqueIdentifier);
			r.upload();
		});
		$('.upload-document .delete').click(function() {
			$('.upload-document .initial-state').removeClass('hide');
			$('.upload-document .image-state').addClass('hide');
			$('.upload-document .image-preview').attr('src', '');
			r.removeFile($(this).attr('uniqueIdentifier'));
		});
		r.on('fileSuccess', function(file, message){
			console.log('file', file)
		});
		r.on('fileError', function(file, message){
			console.log('file', file)
		});
})


// user hints
$(".user-hint").mouseover(function(){
	$(this).find(".hint").addClass("focused").removeClass("no-focus");
})
$(".user-hint").mouseout(function(){
	$(this).find(".hint").addClass("no-focus").removeClass("focused");
})

// Name change
$('.user-name').on('change', function(){

	var UserInput = "";
	var first = "";
	var middle = "";
	var last = "";
	if ( $(this).attr('id') == "name" ) {
		UserInput = $(this).val();
	} else {

		if ( $(this).attr('id') == "First" ) {
			first = $(this).val();
			middle = $(this).parent().parent().find("input[id=Middle]").val();
			last = $(this).parent().parent().find("input[id=Last]").val();

		}
		else if ( $(this).attr('id') == "Middle" ) {
			middle = $(this).val();
			first = $(this).parent().parent().find("input[id=First]").val();
			last = $(this).parent().parent().find("input[id=Last]").val();

		}
		else if ( $(this).attr('id') == "Last" ) {
			last = $(this).val();
			middle = $(this).parent().parent().find("input[id=Middle]").val();
			first = $(this).parent().parent().find("input[id=First]").val();
		}
		 UserInput = first+" "+ middle +" "+ last;
	}

	$(this).closest('.title-change').children('h3').text(UserInput);
});


// multistep form
$(document).ready(function() {


    // Toolbar extra buttons
    var btnFinish = $('<button></button>').text('Finish')
        .addClass('btn btn-info')
        .on('click', function() {
            if (!$(this).hasClass('disabled')) {
                var elmForm = $("#myForm");
                if (elmForm) {
                    elmForm.validator('validate');
                    var elmErr = elmForm.find('.has-error');
                    if (elmErr && elmErr.length > 0) {
                        alert('Oops we still have error in the form');
                        return false;
                    } else {
                        alert('Great! we are ready to submit form');
                        elmForm.submit();
                        return false;
                    }
                }
            }
        });
    var btnCancel = $('<button></button>').text('Cancel')
        .addClass('btn btn-danger')
        .on('click', function() {
            $('#smartwizard').smartWizard("reset");
            $('#myForm').find("input, textarea").val("");
        });

    // Smart Wizard
    $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'dots',
        transitionEffect: 'fade',
        toolbarSettings: {
            toolbarPosition: 'bottom',
            toolbarExtraButtons: [btnFinish, btnCancel]
        },
        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        var elmForm = $("#form-step-" + stepNumber + " .form-step");
        // stepDirection === 'forward' :- this condition allows to do the form validation
        // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
        if (stepDirection === 'forward' && elmForm) {
            elmForm.validator('validate');
            var elmErr = elmForm.children('.has-error');
            if (elmErr && elmErr.length > 0) {
                // Form validation failed
                return false;
            }
        }
        return true;
    });

    $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if (stepNumber == 3) {
            $('.btn-finish').removeClass('disabled');
        } else {
            $('.btn-finish').addClass('disabled');
        }
    });

});
