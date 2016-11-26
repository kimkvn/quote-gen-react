$(document).ready(function(){

  var quoteAPI = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';
  var photoAPI = 'https://pixabay.com/api/';
  var photoKey = '3816165-f45dd5d04573ce59bcdfc3e48';


  /* GET request to the quotes API */
  // function getQuote(){
  //   $.ajax({
  //     url: quoteAPI,
  //     type: 'GET',
  //     data: {},
  //     dataType: 'json',
  //     success: function(data){
  //       console.dir((data.source));
  //     },
  //     error: function(err){
  //       alert(err);
  //     },
  //     beforeSend: function(xhr){
  //       xhr.setRequestHeader('X-Mashape-Authorization', "dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f")
  //     }
  //   }).done(function(data){
  //
  //     /* inserting data from the API */
  //     window.setTimeout(function(){
  //       $('.quote').html(data.quote);
  //       $('.author').html('- '+data.author);
  //       $('h1, .author, .quote-mark').removeClass('blur');
  //       $('h1, .author, .quote-mark').addClass('focus');
  //     }, 1000)
  //
  //     /* injecting the Tweet button */
  //     $('.twitter').append("<a class='twitter-share-button' href='https://twitter.com/intent/tweet' data-text=\"" + data.quote + "\" data-url=0></a>");
  //
  //     /* necessary step for the twitter script to recognize the updated data*/
  //     twttr.widgets.load();
  //
  //     /* preventing a cluster of Tweet buttons from populating */
  //     if($('.twitter-share-button').length > 1){
  //       $('.twitter-share-button')[0].remove();
  //     }
  //
  //   });
  // };

  /* GET request to the photos api */
  function getPhoto(){
    $.ajax({
      url: photoAPI+'?key='+photoKey+'&q=nature+landscape&image_type=photo&per_page=50',
      type: 'GET',
      data: {},
      dataType: 'json',
      success: function(data){

        /* RNG, max = 50 because that's the parameter set in the url of this request */
        var randNum = Math.floor(Math.random()*(50 - 0 + 1));

        /* setting the img element to the randomized photo URL */
        var photoURL = data.hits[randNum].webformatURL;

        $('.photo-bg img').attr('src', photoURL);

      },
      error: function(err){
        alert(err);
      }
    });
  };

  /* Gotta initiate the AJAX requests upon page load. */
  //getQuote();
  getPhoto();


  /*
    Click handler for Get New Quote button.
    Initiates text transition effects and new GET
    requests to the quotes and photos apis.
  */
  $('.new-quote').on('click', function(){
    $('h1, .author, .quote-mark').removeClass('focus');
    $('h1, .author, .quote-mark').addClass('blur');

    //getQuote();
    getPhoto();
  });

});
