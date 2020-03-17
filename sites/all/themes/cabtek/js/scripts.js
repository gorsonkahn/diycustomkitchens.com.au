
(function ($) {  

  Drupal.behaviors.cabtek = {
		
		attach: function (context, settings) {
			
			// All our js code here
			// code here will be executed on page load
			
			
			//FUNCTION TO UPDATE MATERIAL SELECT LIST VIA MAT SLIDER IMAGE CLICK			
      //$('#mat-slider ul.slides li img').click(function() {
//				var $id = $(this).data('val');
//				$("#edit-line-item-fields-field-external-material-und").val($id);
//			});
//			
//			$('#mat-slider ul.slides li span').click(function() {
//				var $id = $(this).data('val');
//				$("#edit-line-item-fields-field-external-material-und").val($id);
//				$.colorbox.close();
//			});

			//EXT MAT SELECT VIA MATERIAL CHOOSER
			$('.ext-mat-chooser').click(function() {
				var $id = $(this).data('val');
				$("#edit-line-item-fields-field-external-material-und").val($id);
				$.colorbox.close();
			});
			
			//INT MAT SELECT VIA MATERIAL CHOOSER
			$('.int-mat-chooser').click(function() {
				var $id = $(this).data('val');
				$("#edit-line-item-fields-field-internal-material-und").val($id);
				$.colorbox.close();
			});
			
			// ***
			// SHOW PRICE FIELD CHECKS
			// ***
			
			// function showPrice(){
			// 	$('.field-commerce-price').show();
			// }
			// //FOR LENGTHS (KICKBOARDS) CHECK FOR A HEIGHT VALUE
			// if($('body').hasClass('node-type-length')) {
			// 	if ($("#edit-line-item-fields-field-height-und-0-value").val() > 0){
			// 		showPrice();
			// 	}
			// }
			// if($('body').hasClass('node-type-product-display')) {
			// 	showPrice();
			// }			
			// if ($("#edit-line-item-fields-field-width-und-0-value").val() > 0){
			// 	showPrice();
			// }
			// if ($(".field-name-commerce-price").text() === "$0.00") {
			// 	$('.field-commerce-price').hide();
			// }
			
			//ADD PRODUCT CAT VALUE TO LINE ITEM FOR USE BY ORDER EXPORT
			var product_cat = $(".field-name-field-product-category").text();
			$("#edit-line-item-fields-field-ez-category-text-und-0-value").val(product_cat);

			
			//ADD HINGE VALUE TO LINE ITEM FOR USE BY ORDER EXPORT
			var hinge_cat = $(".field-name-field-ez-hinge-category").text();
			$("#edit-line-item-fields-field-ez-hinge-text-und-0-value").val(hinge_cat);
			
			
			//GET CUSTOM W,H,D DEFAULT VALUES PER PRODUCT DISPLAY AND WRITE TO LINE ITEM FIELD
			// if ($(".field-name-field-defaults-set").text() == 0){
				// var default_width = $(".field-name-field-width-default").text();
				// $("#edit-line-item-fields-field-width-und-0-value").val(default_width);
				// $(".field-name-field-defaults-set").val("1");
			// }
			
			
			
			//SHOW RELEVANT SHIPPING SERVICES ON CHECKOUT PROCESS
			var hw_status = $("#hard_status").text();
			
			//$( "#edit-commerce-shipping-shipping-service .form-item:nth-child(1)" ).show();
			if (hw_status == '0') {

				//HW ONLY SO HIDE MIXED DELIVERY
				$( "#edit-commerce-shipping-shipping-service .form-item:nth-child(2)" ).hide();
			}
			else {
				
				//MIXED ORDER SO HIDE HW DELIVERY
				$( "#edit-commerce-shipping-shipping-service .form-item:nth-child(3)" ).hide();
			}
			
			//KEEP CHECKOUT BUTTONS ENABLED
			//alert('aa');
			//$(':input[type="submit"]').prop('disabled', false);
			
		// end our js code
		}
	};
})(jQuery);