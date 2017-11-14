// add another applicant
var applicantNumber = 1;

$(".add-applicant").click(function (e) {
	var applicantsForm = $(".applicant-info:first").clone();
	applicantsForm.closest(".applicant-info").find('input:text').val('');
	applicantsForm.insertAfter(".applicant-info:last");
	applicantNumber++;
	document.getElementById("applicantsCount").innerText = "Applying for "+applicantNumber+" Applicants";
});

// select button
$('.select-applicant-btn').click(function(){
		var $this = $(this);
		$this.toggleClass('select-applicant-btn');
		if($this.hasClass('select-applicant-btn')){
				$this.text('Select');
		} else {
				$this.text('Selected');
		}
		event.preventDefault();
});


// delete the added applicant
$(document).on('click','button.delete',function() {
	$(this).parent().remove();
	applicantNumber--;
	document.getElementById("applicantsCount").innerText = "Applying for "+applicantNumber+" Applicants";
});


// enable / disable modal
window.addEventListener("resize", resizeHandler);
window.addEventListener("load", resizeHandler);

function resizeHandler() {
	var winWidth  = window.innerWidth,
			threshold = 760,
			els       = document.getElementsByClassName('apply-exped-btn');

	[].forEach.call(els, function (el) {
		if (winWidth < threshold) {
			el.removeAttribute("data-toggle");
			el.setAttribute("href", "expedition_apply.html");
		} else {
			el.setAttribute("data-toggle", "modal");
		}
	});
}

// apply popup close button
$('#applyPopup').modal({
	backdrop: 'static',
	keyboard: true,
	show: false
})

// select delete error
function selected(select) {
		$(this).addClass('valid');
		$(this).removeClass('error');
		document.getElementById("Desired").click();
}

// form validation
$(".apply-form").simpleform({
	speed : 500,
	transition : 'fade',
	progressBar : true,
	showProgressText : true,
	validate: true
});

function validateForm(formID, Obj){

	switch(formID){
		case 'apply-form' :
			Obj.validate({
				rules: {
					email: {
						required: true,
						email: true
					},
					school: {
						required: true
					},
					bday: {
						required: true
					},
					Desired: {
						required: true
					},
					cardNum: {
						required: true
					},
					expireDate: {
						required: true
					},
					cvc: {
						required: true
					},
					name: {
						required: true
					}
				},
				messages: {
					email: {
						required: "Please enter an email address",
						email: "Not a valid email address"
					},
					school: {
						required: "Please enter your school"
					},
					bday: {
						required: "Please enter your birth day"
					},
					Desired: {
						required: "Please enter your birth day"
					},
					cardNum: {
						required: "Please enter your card number"
					},
					expireDate: {
						required: "Please enter your card expiration date"
					},
					cvc: {
						required: "Please enter your card cvc number"
					},
					name: {
						required: "Please enter your name"
					},
					street: {
						required: "Please enter street name"
					}
				}
			});
		return Obj.valid();
		break;

	}
}


// fixed apply when scroll
$(document).ready(function () {
		// Magic
		$(window).scroll(function () {
				var Y = $(this).scrollTop();
				$('#expedSlider .fixed').each(function () {
					var $this = $(this),
							posY = $this.offset().top,
							posX = $this.offset().left,
							width = $this.width(),
							height = $this.height(),
							headerHeight = $this.find('.apply-exped-details').height(),
							stop = (posY + height) - headerHeight;
					// Fixed on position top / or else
					if (Y > posY) {
						$this.addClass('sticky');
						$this.find('.apply-exped-details').css({
							position: 'fixed',
							top: 0, left: posX,
							width: width
						});
					} else {
						$this.removeClass('sticky');
						$this.find('.apply-exped-details').css({
							position: 'relative',
							top: 0, left: 0,
							width: width
						});
					}
				});
			});
	});
