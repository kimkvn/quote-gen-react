var QuoteGen = React.createClass({

  getInitialState: function(){
    return {
      quote: "",
      author: "",
    };
  },

  componentDidMount: function(){
    this.getQuote();
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
                console.log(data)
      },
      error: function(err){
        alert(err);
      },
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Authorization', "dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f");
      }
    });
  },

  render: function(){
    return(
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
        <button className="new-quote" onClick={this.getQuote}>Get New Quote</button>
        <div className="twitter"></div>
      </div>
      </section>
    );
  }
});

ReactDOM.render(<QuoteGen />, document.getElementById('quoteGen'))
