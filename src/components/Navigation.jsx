import React, { useState, useEffect } from 'react';
import ConnexionInscription from './ConnexionInscription';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../scss/Navigation.scss';
import logo from '../images/calcimmo.png';
import logoText from '../images/calcimmo-text.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const SCROLL_THRESHOLD = 50;

const NAV_ITEMS = [
  { id: 0, href: '#capaciteAchat',    label: "CAPACITÉ D'ACHAT" },
  { id: 1, href: '#calculMensualite', label: 'CALCUL MENSUALITÉ' },
  { id: 2, href: '#calculDuree',      label: 'DURÉE DU PRÊT' },
  { id: 3, href: '#pretTauxZero',     label: 'PRÊT À TAUX ZÉRO' },
];

const Navigation = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeId, setActiveId]   = useState(0);
  const [styleBanner, setStyleBanner] = useState('largeBanner');

  useEffect(() => {
    const handleScroll = () => {
      setStyleBanner(prev => {
        const y = window.scrollY;
        if (y > SCROLL_THRESHOLD && prev === 'largeBanner') return 'smallBanner';
        if (y === 0 && prev === 'smallBanner') return 'largeBanner';
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="topPage">
      <Navbar className="login p-0">
        <NavbarBrand className="p-2">
          <img src={logo}     alt="Calcimmo logo" className="pl-4" width="100px" />
          <img src={logoText} alt="Calcimmo"       className=""     width="200px" />
        </NavbarBrand>
        <NavbarToggler />
        <Nav className="ml-lg-auto" navbar>
          <NavItem onClick={() => setModalOpen(true)} className="p-2 ml-2 myImmo">
            <i className="fas fa-sign-in-alt" />
            <span className="d-none d-sm-inline"> Mon Espace Projet Immo</span>
          </NavItem>
        </Nav>
      </Navbar>

      <ConnexionInscription modalOpen={modalOpen} modalToggle={() => setModalOpen(false)} />

      <div className={`${styleBanner} banner d-flex align-items-center`}>
        <div className="back d-flex justify-content-center align-items-center">
          <AnchorLink href="#capaciteAchat">
            <h1>Votre Calculateur de prêt immobilier</h1>
          </AnchorLink>
        </div>
      </div>

      <Navbar className="navigation py-3" expand="md" light>
        <NavbarToggler onClick={() => setIsOpen(o => !o)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            {NAV_ITEMS.map(({ id, href, label }) => (
              <NavItem key={id} className="px-4 navItemClass">
                <AnchorLink href={href}>
                  <span onClick={() => setActiveId(id)}>{label}</span>
                  {activeId === id && <div className="underline" />}
                </AnchorLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
