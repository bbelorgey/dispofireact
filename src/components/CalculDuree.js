
import 'react-input-range/lib/css/index.css';
import React from 'react';
import ResultatDuree from './ResultatDuree';
import FormulaireDuree from './FormulaireDuree';
import EffetParallaxe from './EffetParallaxe';
import slider3 from '../images/slider3.jpg';

import '../scss/capacite&calcul&duree.scss';
import '../scss/calculDuree.scss';

import { Container, Row, Col } from 'reactstrap';

const CalculDuree = () => {

  return (
    <div>
      <Container fluid className="pb-5 calculDureeContainerFluid rounded containerCapacite">
        <Row className="mt-0">
          <Col xs="12">
            <h2 className="mt-3 pt-2 title"><span>Calculez la durée de votre prêt</span></h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-end justify-content-around align-items-stretch">
          {/*                         saisie des parametres                                 */}
          <FormulaireDuree />

          {/*                         affichage du resultat                                 */}
          <ResultatDuree />
        </Row>
      </Container>
      <EffetParallaxe image={slider3} />
    </div>

  )
}

export default CalculDuree;