import React, { Component } from 'react';

class ProgressiveImage extends Component {
  state = {
    loaded: false,
    source: ''
  };
  componentDidMount() {
    this.loadImages();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.source !== this.props.source ||
      prevProps.placeholderSource !== this.props.placeholderSource
    ) {
      this.loadImages();
    }
  }
  loadImages = () => {
    this.setState({ loaded: false, source: '' });
    const lowResImage = new Image();
    lowResImage.onload = () => {
      // if the high res version is loaded already for some reason (cache?),
      // ignore the result of the low-res load event
      if (this.state.loaded === 'high-res') {
        return;
      }
      this.setState({
        loaded: 'low-res',
        source: this.props.placeholderSource
      });
    };
    lowResImage.src = this.props.placeholderSource;

    if (this.props.source) {
      // Load the high res version in the background
      const highResImage = new Image();
      highResImage.onload = () => {
        this.setState({ loaded: 'high-res', source: this.props.source });
      };
      highResImage.src = this.props.source;
    }
  };
  render() {
    return this.props.children(this.state);
  }
}

export default ProgressiveImage;
