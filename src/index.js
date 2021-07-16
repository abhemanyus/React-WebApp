const domContainer = document.querySelector('#content');
const JSX = (
<div>
  <h1>Hello there!</h1>
  <p>Did this work or not?</p>
  <button>Yes</button>
  <button>No</button>
</div>
);
ReactDOM.render(JSX, domContainer);