$(function() {

  if(Modernizr.history){

  var newHash       = "",
      contentBlock  = $("#content");

  function loadContent(href){
    contentBlock
      .fadeOut(200, function() {
        contentBlock.hide().load(href + " #content").fadeIn(400); 
      });
  }

  $("nav a:not([href='#']").on("click", function() {
  var newLink = $(this).attr("href");
      history.pushState(null, "title", newLink);
      loadContent(newLink);
      return false;
  });
  
  $(window).bind('popstate', function(){
  var newLink = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
   loadContent(newLink);
  });


} // otherwise, history is not supported, so nothing fancy here.

    
});