/* Tropo Conference Demo */
$(document).ready(function() {

   var TROPO_APP = "app:9991479584";

   var phono = $.phono({
      apiKey: "YOUR_API_KEY_HERE",
      onReady: function() {
         $("#join-btn").attr("disabled", false).val("Join Conference");
      }      
   });
   
   var call;
   
	$("#join-btn").click(function() {
      if($(this).val() == "Join Conference"){
   	   call = phono.phone.dial(TROPO_APP, {
   	      headers: [
   	         {name:"x-conferenceid", value:$("#conference-id").val()}
   	      ],
     		   onAnswer: function() {
               $("#join-btn").val("Hangup");
            },
            onHangup: function() {
               $("#join-btn").val("Join Conference");
            }	      
   	   });
      }
      else {
         call.hangup();
      }
	});
	
});

