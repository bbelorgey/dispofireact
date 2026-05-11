import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import EffetParallaxe from './EffetParallaxe';
import slider1 from '../images/slider1.jpg';
import patz from '../images/patz.jpg';

import '../scss/pretTauxZero.scss';

const PretTauxZero = () => {
  return (
    <div>
      <Container fluid className="patzContainerFluid">
        <Row className="justify-content-center align-items-center" >
          <Col xs='11' md='8' lg='4' className="py-5 mr-1 patzPhoto">
            <img className="img-fluid rounded z-depth-1 border" src={patz} alt="pret a taux zero"></img>
          </Col>
          <Col xs='11' md='8' lg='6' className="mb-3 mb-lg-0 py-lg-5 patzText">
            <a href="https://www.economie.gouv.fr/cedef/ptz-pret-a-taux-zero" target="_blank" rel="noopener noreferrer">
              <h2 className="colorTittle">Le prêt à taux zéro en bref!</h2>
              <p className="p-2 ">
                Le prêt à taux zéro, ou PTZ (dénommé auparavant PTZ+), a été progressivement modifié afin de favoriser l'accession sociale
               à la propriété des ménages modestes. Il s'agit d'un prêt immobilier sans frais de dossier et dont les intérêts sont à la
               charge de l'État, destiné à l'achat d'un logement neuf ou à réhabiliter. Il est attribué, sous conditions de ressources,
               aux personnes n’ayant pas été propriétaires depuis au moins deux ans.
              </p>
            </a>
          </Col>
        </Row>
      </Container>
      <EffetParallaxe image={slider1} />
    </div>

  );
};

export default PretTauxZero;