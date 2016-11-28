var App = React.createClass({

  getInitialState: function(){
    return {
      quote: "",
      author: "",
      photoURL: ""
    };
  },

  componentDidMount: function(){
    this.getQuote();
    this.getPhoto();
  },

  getPhoto: function(){
    var photoAPI = 'https://pixabay.com/api/';
    var photoKey = '3816165-f45dd5d04573ce59bcdfc3e48';
    $.ajax({
      url: photoAPI+'?key='+photoKey+'&q=nature+landscape&image_type=photo&per+page=20',
      type: 'GET',
      data: {},
      dataType: 'json',
      success: (data) => {

        /* RNG, max = 50 because that's the parameter set in the url of this request */
        var randNum = Math.floor(Math.random()*(19 - 0 + 1));
        console.log(randNum)
        /* setting the img element to the randomized photo URL */
        this.setState({
          photoURL: data.hits[randNum].webformatURL
        });

      },
      error: function(err){
        alert(err);
      }
    })
  },

  getQuote: function(){
    var quoteAPI = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';
    $.ajax({
      url: quoteAPI,
      type: 'GET',
      data: {},
      dataType: 'json',
      success: (data) => {
        this.setState({
          quote: data.quote,
          author: '-'+data.author
        })

        /* injecting the Tweet button */
        var tweetBtn = document.createElement('a');
        tweetBtn.setAttribute('class', 'twitter-share-button');
        tweetBtn.setAttribute('href', 'https://twitter.com/intent/tweet');
        tweetBtn.setAttribute('data-text', "\""+data.quote+"\"");
        tweetBtn.setAttribute('data-url', 0);
        document.getElementById('twitter').appendChild(tweetBtn)

        /* necessary step for the twitter script to recognize the updated data*/
        twttr.widgets.load();

      },
      error: function(err){
        alert(err);
      },
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Authorization', "dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f");
      }
    });
  },

  updateView: function(){
    this.getQuote();
    this.getPhoto();

    /* preventing a cluster of Tweet buttons from populating */
    var twitterBtns = document.getElementsByClassName('twitter-share-button');
    twitterBtns[0].parentNode.removeChild(twitterBtns[0]);

  },

  render: function(){
    return(
    <div>
      <div className="photo-bg">
        <img src={this.state.photoURL}/>
      </div>
      <section className="quote-box">
      <div className="quote-wrapper">
        <span className="quote-mark">&ldquo;</span>
        <h1 className="quote">
          {this.state.quote}
        </h1>

        <div className="author">
          {this.state.author}
        </div>
      </div>
      <div className="btn-wrap">
        <button className="new-quote" onClick={this.updateView}>Get New Quote</button>
        <div id="twitter"></div>
      </div>
      </section>
    </div>
  )}
});

ReactDOM.render(<App />, document.getElementById('app'));
