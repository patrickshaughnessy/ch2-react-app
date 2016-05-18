
var Root = React.createClass({
  getInitialState: function(){
    return {
      counter: 0
    }
  },

  addCount: function(){
    this.setState({counter: this.state.counter + 1})
  },
  minusCount: function(){
    this.setState({counter: this.state.counter - 1})
  },

  render: function() {
    return (
      <div>
        <h1>Welcome To Managed Properties</h1>
        <p>Add a new property</p>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.minusCount}>-</button>

        <h3>Button clicked: {this.state.counter}</h3>

      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
