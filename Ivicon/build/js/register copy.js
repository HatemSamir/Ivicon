$("#normal").attr("checked","checked"),jQuery(function(){var e=$(".contents").hide();$($("#normal").data("target")).show(),$(".trigger").change(function(){e.hide(),$($(this).data("target")).show()})}),$(".diets label div, .diets label input").click(function(){$(".diets label div, .diets label input").not(this).removeClass("unchecked"),$(this).parent().toggleClass("unchecked")}),$('.gender-label input[type="radio"]').change(function(){$('.gender-label input[type="radio"]').parent().removeClass("active").end().filter(":checked").parent().addClass("active")}),$('.diet-label input[type="radio"]').change(function(){$('.diet-label input[type="radio"]').parent().removeClass("active").end().filter(":checked").parent().addClass("active")});