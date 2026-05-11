import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import '../scss/resultat.scss';

const ResultatMensualite = () => {
  const { duree, taux, assurance, montant, info } = useSelector(state => state);

  const tauxMensuel           = taux / (12 * 100);
  const dureeMensuelle        = duree * 12;
  const assuranceMensuelle    = (assurance * montant) / (100 * 12);
  const mensualite = tauxMensuel > 0
    ? Math.round(montant * tauxMensuel / (1 - Math.pow(1 + tauxMensuel, -dureeMensuelle)) + assuranceMensuelle)
    : Math.round(montant / dureeMensuelle + assuranceMensuelle);

  return (
    <Col xs="12" md="6" className="mt-5">
      <Row>
        <Col xs="12" xl="6" className="resultGreen upContainer pt-5">
          <div><i className="fas fa-city" /></div>
          <div>Mensualité</div>
          <div>{mensualite} €</div>
        </Col>
        <Col xs="12" xl="6" className="resultBlue upContainer">
          <div className="my-5">
            <div>Montant emprunté</div>
            <div>{montant} €</div>
            <div>Durée du prêt</div>
            <div>{duree} ans</div>
          </div>
        </Col>
        <Col xs="12" xl="6" className="mt-1 resultBlue">
          <div>TAUX : {taux} %</div>
        </Col>
        <Col xs="12" xl="6" className="mt-1 resultGreen">
          <div>ASSURANCE : {assurance} %</div>
        </Col>
      </Row>
      <Row>
        Pour un emprunt de {montant} €, vos mensualités s'élèvent à {mensualite} €.
      </Row>
      <Row>{info}</Row>
    </Col>
  );
};

export default ResultatMensualite;
