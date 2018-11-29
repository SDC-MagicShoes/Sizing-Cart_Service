import React from 'react';
import axios from 'axios';
import Sizes from './Sizes';

const _ = require('lodash');

class App extends React.Component {

  static sortSizes(a, b) {
    return a - b;
  }

  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
      defaultSizes: _.chunk(
        [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16, 17, 18], 5,
      ),
      description: '',
      shoeId: 100000,
      curButton: -1,
    };
    this.setCurrent = this.setCurrent.bind(this);
  }

  componentDidMount() {
    this.getSizes();
    this.getDescription();
  }

  getSizes() {
    const { shoeId } = this.state;
    axios.get(`http://localhost:3003/${shoeId}/sizes`)
      .then((response) => {
        let sizes = response.data;
        sizes = sizes.sort(this.sortSizes);
        this.setState({ sizes });
      });
  }

  getDescription() {
    const { shoeId } = this.state;
    axios.get(`http://localhost:3003/${shoeId}/descrip`)
      .then((response) => {
        const description = response.data;
        this.setState({ description }); 
      });
  }

  setCurrent(idx) {
    const newState = this.state;
    newState.curButton = idx;
    this.setState(newState);
  }

  render() {

    return (
      <div id="sizesAndDescription">
        <Sizes
          sizes={this.state.sizes}
          curButton={this.state.curButton}
          setCurrent={this.setCurrent}
          defaultSizes={this.state.defaultSizes}
        />
        <div className="cart">
          <button type="button" className="cart-button">Add to Cart</button>
          <button type="button" className="heart-button" title="Add to Wishlist"><i className="material-icons">favorite</i></button>
        </div>
        <div className="description-paragraph">
          <p>
            { this.state.description[2] }
          </p>
        </div>
        <div className="description-details">
          <ul className="details">
            <li>
              { `Shown: ${this.state.description[1]}` }
            </li>
            <li>
              { `Style: ${(this.state.description[0])}` }
            </li>
          </ul>
          <div className="description-readmore">Read more</div>
        </div>
      </div>
    );
  }
}

export default App;
