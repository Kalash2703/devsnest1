function Card(){
  return(
      <div class="meme">
        <p> * When you enter in wrong class:</p>
        <img  class="img" src="https://memegenerator.net/img/instances/76098819.jpg" alt="meme" />
      </div>
  );
}

ReactDOM.render(<Card />,document.getElementById('card'));