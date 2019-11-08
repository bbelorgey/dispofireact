import React, { Component } from 'react';
import ConnexionInscription from './ConnexionInscription';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../scss/Navigation.scss';
import logo from '../images/calcimmo.png';
import logoText from '../images/calcimmo-text.png';

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


let lastScrollY = 0;
let scrollValue = 50;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modalOpen: false,
      id: [1, 0, 0, 0],
      styleBanner : 'largeBanner'
    }
    this.toggle = this.toggle.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    //                      reference du bouton
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  myRef = React.createRef();
  //                      gestion du scroll
  handleScroll = () => {
    let {styleBanner} = this.state;
    lastScrollY = window.scrollY;
    if (lastScrollY > scrollValue && styleBanner === 'largeBanner') {
      this.setState({styleBanner:'smallBanner'});
    }
    if (lastScrollY === 0 && styleBanner === 'smallBanner') {
      this.setState({styleBanner:'largeBanner'});
    }
  };

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  modalToggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  selectedItem(e) {
    const { id } = e.target;
    let val = parseInt(id, 10);
    let idTmp = [0, 0, 0, 0];
    idTmp[val] = 1;
    this.setState({ id: idTmp })
  }

  render() {
    const { isOpen, modalOpen, id, styleBanner } = this.state;
    return (
      <header id="topPage">
        {/*                          Connexion Mon espace projet immo            */}
        <Navbar className="login p-0">
          <NavbarBrand className="p-2">
            <img src={logo} alt={logo} className="pl-4" width="100px" />
            <img src={logoText} alt={logo} className="" width="200px" />
          </NavbarBrand>

          <NavbarToggler />
          <Nav className="ml-lg-auto" navbar>

            <NavItem onClick={this.modalToggle} className="p-2 ml-2 myImmo">
              <i className="fas fa-sign-in-alt"></i>
              <span className="d-none d-sm-inline"> Mon Espace Projet Immo</span>
            </NavItem>
          </Nav>
        </Navbar>
        {/*                         modal de connexion                          */}

        <ConnexionInscription modalOpen={modalOpen} modalToggle={this.modalToggle} />
        {/*                         banner                                      */}
        <div ref={this.myRef} className={`${styleBanner} banner d-flex align-items-center`}>
          <div className="back d-flex justify-content-center align-items-center">
            <AnchorLink href='#capaciteAchat'>
              <h1>
                Votre Calculateur de prêt immobilier
            </h1>
            </AnchorLink>
          </div>
        </div>
        {/*                           menu general                              */}

        <Navbar className="navigation py-3" expand="md" light>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto " navbar>

              <NavItem className="px-4 navItemClass active">
                <AnchorLink href='#capaciteAchat'>
                  <span id="0" onClick={this.selectedItem}>CAPACITÉ D'ACHAT</span>
                  <div className={id[0] === 1 ? "underline" : ''}></div>
                </AnchorLink>
              </NavItem>

              <NavItem className="px-4 navItemClass">
                <AnchorLink href='#calculMensualite'>
                  <span id="1" onClick={this.selectedItem}>CALCUL MENSUALITÉ</span>
                  <div className={id[1] === 1 ? "underline" : ''}></div>
                </AnchorLink>
              </NavItem>

              <NavItem className="px-4 navItemClass">
                <AnchorLink href='#calculDuree'>
                  <span id="2" onClick={this.selectedItem}>DUREE DU PRÊT</span>
                  <div className={id[2] === 1 ? "underline" : ''}></div>
                </AnchorLink>
              </NavItem>

              <NavItem className="px-4 navItemClass">
                <AnchorLink href='#pretTauxZero'>
                  <span id="3" onClick={this.selectedItem}>PRÊT À TAUX ZÉRO</span>
                  <div className={id[3] === 1 ? "underline" : ''}></div>
                </AnchorLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Navigation;
