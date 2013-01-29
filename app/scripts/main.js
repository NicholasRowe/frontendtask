$(document).ready( function(){
  $('#search-form').submit( function(e){
    e.preventDefault();



    var term = $(this).find('#search-term').val(),
        COUNT = 20,
        url = "http://search.twitter.com/search.json?q=" + term + "&rpp=" + COUNT + "&lang=en&callback=?";

    $.getJSON(url, function(data) {
      $.each(data.results, function(key,tweet){
        var tweetHTML = $("<li><img src='" + tweet.profile_image_url + "' /> <span class='user-name'> "+ tweet.from_user_name +"</span> <span class='at-name'>@"+ tweet.from_user +"</span> <p>" + tweet.text + "</p>  <span class='meta'>"+ tweet.created_at +"</span> </li>");
        $('#tweets').append(tweetHTML);
      });
    });

  });
});
