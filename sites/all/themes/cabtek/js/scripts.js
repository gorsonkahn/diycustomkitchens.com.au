
//# sourceMappingURL=scripts.map

//function mat_ext_update($id){
//	alert ('xxx');
//	$("#edit-line-item-fields-field-external-material-und").val($id);
//}


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
			
			//SHOW PRICE FOR LINE ITEMS WITH MAT FIELDS AND A VALUE IS SELECTED
			function showPrice(elem){
				//TEST IF FIELD EXISTS THEN TEST FOR A SELECTED VALUE
				if (elem.length) {
					if (elem.val() != '_none') {
						$('.field-commerce-price').show();
					}
				}
			}
			var ext_field = $("#edit-line-item-fields-field-external-material-und");
			var int_field = $("#edit-line-item-fields-field-internal-material-und")
			
			//TEST BOTH FIELDS USING THE FUNCTION ABOVE
			if ( (ext_field.length) || (int_field.length) ) {
				
				//THERE IS A MAT FIELD SO RUN THE TESTS
				showPrice(ext_field);
				showPrice(int_field);
			} 
			else {
				
				//NEITHER MAT FIELD EXISTS SO SHOW PRICE FIELD
				$('.field-commerce-price').show();
			}
			
		// end our js code
		}
	};
})(jQuery);