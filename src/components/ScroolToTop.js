import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../scss/scrollToTop.scss';

//                        position du  viewport
let lastScrollY = 0;
let scrollValue = 300;

class ScroolToTop extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  //                      reference du bouton
  myRef = React.createRef();

  //                      gestion du scroll
  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY > scrollValue) {
      this.myRef.current.style.opacity = 1;
      // this.myRef.current.style.fontSize = `${lastScrollY*2}px`;
    }
    else {
      this.myRef.current.style.opacity = 0;
    }
  };

  render() {
    return (
      <AnchorLink href='#topPage'>
        <i ref={this.myRef} className="fas fa-home scrollButton"></i>
      </AnchorLink>
    )
  }
}

export default ScroolToTop;