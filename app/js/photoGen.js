var PhotoGen = React.createClass({

  getInitialState: function(){
    return{
        photoURL: ""
    }
  },

  componentDidMount: function(){
    var photoAPI = 'https://pixabay.com/api/';
    var photoKey = '3816165-f45dd5d04573ce59bcdfc3e48';
    $.ajax({
      url: photoAPI+'?key='+photoKey+'&q=nature+landscape&image_type=photo&per+page=20',
      type: 'GET',
      data: {},
      dataType: 'json',
      success: (data) => {
        console.log(data)

        /* RNG, max = 50 because that's the parameter set in the url of this request */
        var randNum = Math.floor(Math.random()*(19 - 0 + 1));

        /* setting the img element to the randomized photo URL */
        this.setState({
          photoURL: data.hits[randNum].webformatURL
        });

        console.log(data.hits[randNum].webformatURL)

      },
      error: function(err){
        alert(err);
      }
    })

  },

  render: function(){
    return(
    <div className="photo-bg">
      <img src={this.state.photoURL}/>
    </div>
  )}
});

ReactDOM.render(<PhotoGen />, document.getElementById('photoGen'));
