$(document).ready(function() {
		$('.form-validation').bootstrapValidator({
				// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
				feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
				},
				fields: {
					full_name: {
							validators: {
											stringLength: {
											min: 5,
									},
											notEmpty: {
											message: 'Please type your full name'
									}
							}
					},
					password: {
							validators: {
											stringLength: {
											min: 5,
									},
											notEmpty: {
											message: 'Please type your old password'
									}
							}
					},
					confrim_password: {
							validators: {
											stringLength: {
											min: 5,
									},
											notEmpty: {
											message: 'Please type your old password'
									}
							}
					},
					change_password: {
							validators: {
											stringLength: {
											min: 5,
									},
											notEmpty: {
											message: 'Please type your old password'
									}
							}
					},
						change_password: {
								validators: {
												stringLength: {
												min: 5,
										},
												notEmpty: {
												message: 'Please type your old password'
										}
								}
						},
						 new_password: {
								validators: {
										 stringLength: {
												min: 5,
										},
										notEmpty: {
												message: 'Please type your new password'
										}
								}
						},
						retype_password: {
							 validators: {
										stringLength: {
											 min: 5,
									 },
									 notEmpty: {
											 message: 'Please retype your new password'
									 }
							 }
					 },
						email: {
								validators: {
										notEmpty: {
												message: 'Please supply your email address'
										},
										emailAddress: {
												message: 'Please supply a valid email address'
										}
								}
						},
						phone: {
								validators: {
										notEmpty: {
												message: 'Please supply your phone number'
										},
										phone: {
												country: 'US',
												message: 'Please supply a vaild phone number with area code'
										}
								}
						},
						address: {
								validators: {
										 stringLength: {
												min: 8,
										},
										notEmpty: {
												message: 'Please supply your street address'
										}
								}
						},
						city: {
								validators: {
										 stringLength: {
												min: 4,
										},
										notEmpty: {
												message: 'Please supply your city'
										}
								}
						},
						state: {
								validators: {
										notEmpty: {
												message: 'Please select your state'
										}
								}
						},
						zipcode: {
								validators: {
										notEmpty: {
												message: 'Please supply your zip code'
										},
										zipCode: {
												country: 'US',
												message: 'Please supply a vaild zip code'
										}
								}
						},
						comment: {
								validators: {
											stringLength: {
												min: 10,
												max: 200,
												message:'Please enter at least 10 characters and no more than 200'
										},
										notEmpty: {
												message: 'Please supply a description of your project'
										}
										}
								}
						}
				})
		});
