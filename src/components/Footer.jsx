import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../scss/footer.scss';

const Footer = () => {

  return (
    <Container fluid className="footerContainer">
      <Row>
        <Col md="3" className="p-4 ml-auto">
          <h4 className="mb-4">Calcimmo</h4>
          <a href="" className="">Mentions légales</a>
        </Col>
        <Col md="3" className="p-4 ml-auto">
          <h4 className="mb-4 ">Plan</h4>
          <ul className="list-unstyled">
            <li>
              <AnchorLink href='#capaciteAchat'>
                Capacité d'achat
              </AnchorLink>
            </li>
            <li>
            <AnchorLink href='#calculMensualite'>
                Calcul mensualité
              </AnchorLink>
            </li>
            <li>
            <AnchorLink href='#calculDuree'>
                Durée
              </AnchorLink>
            </li>
            <li>
            <AnchorLink href='#pretTauxZero'>
                Prêt à taux 0
              </AnchorLink>
            </li>
          </ul>
        </Col>
        <Col md="3" className="p-4 ml-auto">
          <h4 className="mb-4">Réseaux sociaux</h4>
          <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/" className="" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/" className="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.spotify.com/" className="" rel="noopener noreferrer">Spotify</a></li>
          </ul>
        </Col>
        <Row>
          <Col >
            <p className="ml-5">© Copyright 2019 - Tout droit réservé à Calcimmo. </p>
          </Col>
        </Row>
      </Row>
    </Container>
  )

}

export default Footer;
