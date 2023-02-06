import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img class="inline" src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImageComponent;
