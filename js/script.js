// dropdown
$(".parent-dropdown").mouseenter(function(){
  //console.log('mouseenter su parent');
  $(".dropdown").removeClass("active");
  $(this).children(".dropdown").addClass("active");
});


$(".parent-dropdown").click(function(){
  //console.log('mouseenter su parent');
  $(this).children(".dropdown").toggleClass("active");
});
