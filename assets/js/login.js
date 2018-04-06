$(document).ready(function(){
  //signed in
  $('.link').on('click',function() {
    var user = $('#userid').val();
    var pw = $('#userpw').val();
    if(user === "baymax" && pw === "falala") {
      $('.link').attr("href","assets/html/user.html");
    }
  });
});