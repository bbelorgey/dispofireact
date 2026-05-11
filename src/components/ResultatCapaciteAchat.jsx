import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import '../scss/resultat.scss';

const ResultatCapaciteAchat = () => {
  const { mensualite, duree, taux, assurance, info } = useSelector(state => state);

  const tauxMensuel   = taux / (12 * 100);
  const dureeMensuelle = duree * 12;
  const k = taux > 0
    ? (1 - Math.pow(1 + tauxMensuel, -dureeMensuelle)) / tauxMensuel
    : dureeMensuelle;
  // Formule exacte tenant compte de l'assurance mensuelle : P = M*k / (1 + assurance/1200*k)
  const tauxAssuranceMensuel = assurance / 1200;
  const montantEmprunt = Math.round(mensualite * k / (1 + tauxAssuranceMensuel * k));

  return (
    <Col xs="12" md="6" className="mt-5">
      <Row>
        <Col xs="12" xl="6" className="resultGreen upContainer pt-5">
          <div><i className="fas fa-city" /></div>
          <div>Capacité d'achat</div>
          <div>{montantEmprunt} €</div>
        </Col>
        <Col xs="12" xl="6" className="resultBlue upContainer">
          <div className="my-5">
            <div>Mensualités</div>
            <div>{mensualite} €</div>
            <div>Durée</div>
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
        Vous pouvez emprunter {montantEmprunt} € (hors frais de notaire).
      </Row>
      <Row>{info}</Row>
    </Col>
  );
};

export default ResultatCapaciteAchat;
