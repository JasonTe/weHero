$(document).ready(function(){
  $('.logoff').hide();
  var $body = $('.tweet-feed');
  var $filterUsers = $('.tweet-feed-filter');
  $body.html('');
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweetcontainer = 
      $('<div class = "fala-container">' 
          +'<div class = "fala-icon">'
            + '<img class = "icon-user" src = "../img/users/' + tweet.user + '.png">'
          +'</div>'
          +'<div class = "fala-name">'
            + '<a class = "fala-username" href = "#">' + tweet.user + '</a>' + ' <span class = "usertime">@' + tweet.user + ' ' + moment().fromNow() + '</span>' 
          +'</div>'
          +'<div class = "fala-message">'
            + tweet.message + '<img class = "fala-image" src = "../img/users/' + tweet.image + '.jpg">' 
          +'</div>'
       +'</div>');
    $tweetcontainer.appendTo($body);
    index -= 1;
  }

  setInterval(function() {
    var index = streams.home.length - 1;
    var tweet = streams.home[index];
    var $tweetcontainer = 
      $('<div class = "fala-container">' 
          +'<div class = "fala-icon">'
            + '<img class = "icon-user" src = "../img/users/' + tweet.user + '.png">'
          +'</div>'
          +'<div class = "fala-name">'
            + '<a class = "fala-username" href = "#">' + tweet.user + '</a>' + ' <span class = "usertime">@' + tweet.user + ' ' + moment().fromNow() + '</span>' 
          +'</div>'
          +'<div class = "fala-message">'
            + tweet.message + '<img class = "fala-image" src = "../img/users/' + tweet.image + '.jpg">' 
          +'</div>'
       +'</div>');
    $tweetcontainer.prependTo('.tweet-feed');
  }, 3000);

  $('.fala-container').on('click','.fala-username', function(){
    var clickedUsers = $(this).text();
    $body.hide();
    streams.users[clickedUsers].forEach(function(element) {
      element['created_at'] = moment().fromNow();
      var falaUser = $('<div class = "fala-container">' 
          +'<div class = "fala-icon">'
            + '<img class = "icon-user" src = "../img/users/' + element['user'] + '.png">'
          +'</div>'
          +'<div class = "fala-name">'
            + '<a class = "fala-username" href = "#">' + element['user'] + '</a>' + ' <span class = "usertime">@' + element['user'] + ' ' + element['created_at']+ '</span>' 
          +'</div>'
          +'<div class = "fala-message">'
            + element['message'] + '<img class = "fala-image" src = "../img/users/' + element['image'] + '.jpg">' 
          +'</div>'
       +'</div>');
      falaUser.appendTo($filterUsers).fadeIn('fast');
    });
  });

  //Allow visitors to write tweet clicking falala button
  $('.input-btn').on('click',function() {
    var username = '<span>Baymax</span>';
    var message = $('.message').val();
    var time = moment().fromNow();
    var $mymessage = 
    $('<div class = "fala-container">' 
      +'<div class = "fala-icon">'
        + '<img class = "icon-user" src = "../img/founder.png">'
      +'</div>'
      +'<div class = "fala-name">'
        + '<a class = "fala-username" href = "#">' + username + '</a>' + ' <span class = "usertime">@' + username + ' ' + time + '</span>' 
      +'</div>'
      +'<div class = "fala-message">'
        + message
      +'</div>'
    +'</div>');
    $mymessage.prependTo($body);
    $('.message').val('');
  });
  // Logoff
  $('.user-icon').on('click', function(){
    $('.logoff').toggle();
  });
});

  