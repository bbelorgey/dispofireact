
import 'react-input-range/lib/css/index.css';
import React from 'react';
import ResultatMensualite from './ResultatMensualite';
import FormulaireMensualite from './FormulaireMensualite';
import EffetParallaxe from './EffetParallaxe';
import slider2 from '../images/slider1.jpg';

import '../scss/capacite&calcul&duree.scss';
import '../scss/calculMensualite.scss';

import { Container, Row, Col } from 'reactstrap';

const CalculMensualite = () => {

  return (
<div>
        <Container fluid className="pb-5 mensualiteContainerFluid rounded containermensualite">
        <Row className="">
          <Col xs="12">
            <h2 className="mt-3 pt-2 title"><span>Calculez vos mensualités</span></h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-end justify-content-around align-items-stretch">
          {/*                         saisie des parametres                                 */}
          <FormulaireMensualite />

          {/*                         affichage du resultat                                 */}
          <ResultatMensualite />
        </Row>
      </Container>
      <EffetParallaxe image={slider2} />
</div>

  )
}

export default CalculMensualite;