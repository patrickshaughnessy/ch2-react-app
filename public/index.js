
var Welcome = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome To Managed Properties</h1>
        <p>Add a new property</p>
      </div>
    )
  }
})

var Counter = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Counter 1: {this.props.counter}</h3>
        <button onClick={this.props.onAddClick}>+</button>
        <button onClick={this.props.onMinusClick}>-</button>
      </div>
    )
  }
})

var Root = React.createClass({
  getInitialState: function(){
    return {
      counter: 0
    }
  },

  addCount: function(){
    console.log('in root add count')
    this.setState({counter: this.state.counter + 1});
  },

  minusCount: function(){
    console.log('in root minus count')
    this.setState({counter: this.state.counter - 1});
  },

  render: function() {
    return (
      <div>

        <Welcome />

        <Counter onAddClick={this.addCount} onMinusClick={this.minusCount} counter={this.state.counter} />


      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
