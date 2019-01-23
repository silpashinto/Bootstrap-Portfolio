$("#one").on("click", function (event) {
   event.preventDefault();
    
   $('#firstpage').show();
   $('#secondpage').hide();

});
$("#two").on("click", function (event) {
    event.preventDefault();
     
    $('#firstpage').hide();
    $('#secondpage').show();
 
 });