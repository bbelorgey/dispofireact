
import 'react-input-range/lib/css/index.css';
import React from 'react';
import ResultatCapaciteAchat from './ResultatCapaciteAchat';
import FormulaireCapaciteAchat from './FormulaireCapaciteAchat';
import EffetParallaxe from './EffetParallaxe';
import slider3 from '../images/slider3.jpg';

import '../scss/capacite&calcul&duree.scss';
import '../scss/capaciteAchat.scss';

import { Container, Row, Col } from 'reactstrap';

//                         Composant calcul de la capacité d'achat
const CapaciteAchat = () => {
  return (
    <div>
      <Container fluid className="pb-5 capaciteContainerFluid containerCapacite">
        <Row className="mt-0">
          <Col xs="12">
            <h2 className="mt-3 pt-2 title"><span>Calculez votre capacité d'achat</span></h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-end justify-content-around align-items-stretch">
          {/*                         saisie des parametres                                 */}
          <FormulaireCapaciteAchat />
          {/*                         affichage du resultat                                 */}
          <ResultatCapaciteAchat />
        </Row>
      </Container>
      <EffetParallaxe image={slider3} />
    </div>
  )
}

export default CapaciteAchat;