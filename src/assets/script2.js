function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote").html(response.quoteText);
            $('#author').html(response.quoteAuthor);
            //update the tweet href
            
            $('#main').fadeIn(1200);
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
        var twitterURL = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freecodecamp&text="';
        var quote = $("#quote").text();
        var author = $('#author').text();
        twitterURL +=quote +'" - '+ author;
        

        //attach it the URL to the href attribute
        $('#tweet').attr('href', twitterURL);
      }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});

/*
 $("#quote").text(response.quoteText);
            $('#author').text(response.quoteAuthor);
            //update the tweet href
            tweetQuote();
            $('#main').fadeIn(1200); 
        }
        tweetQuote();
        $("#quote").html("<p id='quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");*/