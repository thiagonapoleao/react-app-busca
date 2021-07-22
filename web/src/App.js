/*import React, { Component } from 'react'; -----> usado para class */
/*import React, { useState } from 'react'; -----> usado para Function */
import React from 'react';
import PromotionCard from './components/Promotion/Card/Card';


const App = () => {
  const promotion = {
    "id": 1,
    "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
    "price": 1799,
    "url": "",
    "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem_url/2631517face1861bc4f46ae154d387de.png",
    "comments": [
      {
        "id": 1,
        "comment": "TELA HD"
      }
    ]
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      <PromotionCard promotion={promotion} />
    </div>
  );
}



/* exemplo de Function 
const App = () => {
  const [showImage, setShowImage] = useState(false);

  const toggle = () => {
    setShowImage(!showImage)    
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={toggle}>
          {this.state.showImage ? 'Esconder' : 'Mostar'}
        </button>
        {this.state.showImage && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/* ---- exemplo de class
 class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showImage: false,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.toggle}>
            {this.state.showImage ? 'Esconder' : 'Mostar'}
          </button>
          {this.state.showImage && (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
 */
export default App;
