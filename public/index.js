

var Hello = React.createClass({
  render: function(){
    return (
      <h1>Yo</h1>
    )
  }
})

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
