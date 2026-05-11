import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import '../scss/resultat.scss';

const ResultatDuree = () => {
  const { mensualite, taux, assurance, montant, info } = useSelector(state => state);

  const tauxMensuel = taux / (12 * 100);

  // Montant total incluant assurance (approximation : taux appliqué au capital initial)
  const montantTotal = assurance > 0
    ? montant * (1 + assurance / 100)  // sera affiné après calcul de durée
    : montant;

  const calcDuree = (capital) => {
    if (capital <= 0 || mensualite <= 0) return 0;
    if (tauxMensuel > 0) {
      const num = Math.log(mensualite) - Math.log(mensualite - tauxMensuel * capital);
      return num > 0 ? Math.round(num / Math.log(1 + tauxMensuel) / 12) : 0;
    }
    return Math.round(capital / (mensualite * 12));
  };

  let dureePret     = calcDuree(montant);
  let capitalTotal  = montant;

  if (assurance > 0 && dureePret > 0) {
    capitalTotal = Math.round(montant * (1 + (assurance * dureePret) / 100));
    dureePret    = calcDuree(capitalTotal);
  }

  return (
    <Col xs="12" md="6" className="mt-5">
      <Row>
        <Col xs="12" xl="6" className="resultGreen upContainer pt-5">
          <div><i className="fas fa-city" /></div>
          <div>Durée du prêt</div>
          <div>{dureePret} ans</div>
        </Col>
        <Col xs="12" xl="6" className="resultBlue upContainer">
          <div className="my-5">
            <div>Mensualités</div>
            <div>{mensualite} €</div>
            <div>Montant avec assurance</div>
            <div>{capitalTotal} €</div>
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
        Pour emprunter {montant} € avec {mensualite} €/mois, la durée estimée est de {dureePret} ans.
      </Row>
      <Row>{info}</Row>
    </Col>
  );
};

export default ResultatDuree;
