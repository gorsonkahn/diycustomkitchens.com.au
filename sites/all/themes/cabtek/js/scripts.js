
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
			});
			
		// end our js code
		}
	};
})(jQuery);