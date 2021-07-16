var domContainer = document.querySelector('#content');
var JSX = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello there!'
  ),
  React.createElement(
    'p',
    null,
    'Did this work or not?'
  ),
  React.createElement(
    'button',
    null,
    'Yes'
  ),
  React.createElement(
    'button',
    null,
    'No'
  )
);
ReactDOM.render(JSX, domContainer);