var QuoteGen = React.createClass({

  getInitialState: function(){
    return {
      quote: "",
      author: "",
    };
  },

  // .header('X-Mashape-Authorization', "dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f")

  componentDidMount: function(){
    var quoteAPI = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';
    $.ajax({
      url: quoteAPI,
      type: 'GET',
      data: {},
      dataType: 'json',
      success: function(data){
        console.log(data)
      },
      error: function(err){
        alert(err);
      },
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Authorization', "dwT2puf9UhmshZ9HCTST3CohCRrQp1NZTnBjsnRX41vK4WGw0f");
      }
    })



    // this.serverRequest =
    //   $.get(quoteAPI,
    //     (data) => {
    //       console.dir(data.items)
    //       this.setState({
    //         videoInfo: data.items
    //       });
    //     }.bind(this));
  },

  render: function(){
    return(
      <section className="quote-box">
      <div className="quote-wrapper">
        <span className="quote-mark">&ldquo;</span>
        <h1 className="quote">
        </h1>

        <div className="author">
        </div>
      </div>
      <div className="btn-wrap">
        <div className="new-quote">Get New Quote</div>
        <div className="twitter"></div>
      </div>
      </section>
    );
  }
});

ReactDOM.render(<QuoteGen />, document.getElementById('quoteGen'))
