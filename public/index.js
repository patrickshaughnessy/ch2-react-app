
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
  getInitialState: function() {
    return {
      counter: 0
    }
  },

  render: function() {
    return (
      <div>
        <h3>Counter 2: {this.state.counter}</h3>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </div>
    )
  }
})

var Root = React.createClass({
  getInitialState: function(){
    return {
      counters: {
        one: 0,
        two: 0
      }
    }
  },

  addCount: function(event){
    console.log('event', event.target)
    var id = event.target.id
    var newState = Object.create(this.state);
    newState.counters[id]++;
    this.setState(newState);
  },
  minusCount: function(arg, event){
    console.log('arg', arg, 'event', event.target)
    var key = arg;
    var newState = Object.create(this.state);
    newState.counters[key]--;
    this.setState(newState)
  },

  render: function() {
    return (
      <div>

        <Welcome />

        <h3>Counter 1: {this.state.counters.one}</h3>
        <button id="one" onClick={this.addCount}>+</button>
        <button onClick={this.minusCount.bind(this, 'one')}>-</button>

        <Counter />


      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
