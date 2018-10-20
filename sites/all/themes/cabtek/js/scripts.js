
(function ($) {  

  Drupal.behaviors.cabtek = {
		
		attach: function (context, settings) {
			
			// All our js code here
			// code here will be executed on page load
			
			
			//FUNCTION TO UPDATE MATERIAL SELECT LIST VIA MAT SLIDER IMAGE CLICK			
      $('#mat-slider ul.slides li img').click(function() {
				var $id = $(this).data('val');
				$("#edit-line-item-fields-field-external-material-und").val($id);
			});
			
			$('#mat-slider ul.slides li span').click(function() {
				var $id = $(this).data('val');
				$("#edit-line-item-fields-field-external-material-und").val($id);
				$.colorbox.close();
			});
			
			$('.colorbox-mat-row-item').click(function() {
				var $id = $(this).data('val');
				$("#edit-line-item-fields-field-external-material-und").val($id);
				$.colorbox.close();
			});
			
			// ***
			// SHOW PRICE FIELD CHECKS
			// ***
			
			function showPrice(){
				$('.field-commerce-price').show();
			}
			//FOR LENGTHS (KICKBOARDS) CHECK FOR A HEIGHT VALUE
			if($('body').hasClass('node-type-length')) {
				if ($("#edit-line-item-fields-field-height-und-0-value").val() > 0){
					showPrice();
				}
			}
			if($('body').hasClass('node-type-product-display')) {
				showPrice();
			}			
			if ($("#edit-line-item-fields-field-width-und-0-value").val() > 0){
				showPrice();
			}
			if ($(".field-name-commerce-price").text() === "$0.00") {
				$('.field-commerce-price').hide();
			}
			
			
			//ADD PRODUCT CAT VALUE TO LINE ITEM FOR USE BY ORDER EXPORT
			var product_cat = $(".field-name-field-product-category").text();
			$("#edit-line-item-fields-field-ez-category-text-und-0-value").val(product_cat);
			
			//ADD HINGE VALUE TO LINE ITEM FOR USE BY ORDER EXPORT
			var hinge_cat = $(".field-name-field-ez-hinge-category").text();
			$("#edit-line-item-fields-field-ez-hinge-text-und-0-value").val(hinge_cat);
			
		// end our js code
		}
	};
})(jQuery);