import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { capacite } from '../actions';


import '../scss/resultat.scss';

const ResultatDuree = ({ formulaire }) => {
const { mensualite, taux, assurance, montant, info } = formulaire;
let montantTotal = montant;
let tauxMensuel= taux/(12*100);
let dureePret = ((tauxMensuel>0) && (montant>0))
  ? Math.round( ( ( Math.log(mensualite)-Math.log(mensualite -(tauxMensuel*montant)) ) / Math.log(1+tauxMensuel) )/12 )
  : Math.round(montant*(1+tauxMensuel)/(mensualite*12));

if(assurance>0) {
  montantTotal = montant * (1 + (assurance * dureePret /100));
  dureePret = ((tauxMensuel>0) && (montant>0))
  ? Math.round( ( ( Math.log(mensualite)-Math.log(mensualite -(tauxMensuel*montantTotal)) ) / Math.log(1+tauxMensuel) )/12 )
  : Math.round(montantTotal*(1+tauxMensuel)/(mensualite*12));
  montantTotal = Math.round(montantTotal);
  }

  return (
    <Col xs="12" md="6" className="mt-5">

      <Row> 
        {/* resultat */}
        <Col xs="12" xl="6" className="resultGreen upContainer pt-5">
          <div>
            <i className="fas fa-city "></i>
          </div>
          <div>Durée du prêt</div>
          <div>{dureePret} Ans</div>
        </Col>

        {/* Détail */}
        <Col xs="12" xl="6" className="resultBlue upContainer">
          <div className="my-5">
            <div>Mensualités</div>
            <div>{mensualite} €</div>
            <div>Montant avec assurance</div>
            <div>{montantTotal} €</div>
          </div>
        </Col>

        {/* Taux nominal */}
        <Col xs="12" xl="6" className="mt-1 resultBlue">
          <div>
            TAUX : {taux} %
          </div>
        </Col>
        {/* Taux assurance */}
        <Col xs="12" xl="6" className="mt-1 resultGreen">
          <div>AUURANCE : {assurance} %</div>
        </Col>
      </Row>

      <Row>
        Vous disposez de {montant} € (capacité d'achat hors frais).
      </Row>
      <Row>
        {info}
      </Row>

    </Col>
  )
}

const mapDispatchToProps = dispatch => ({
  capacite: (neuf, mensualite, duree, taux, assurance, montant) => dispatch(capacite(neuf, mensualite, duree, taux, assurance, montant))
});

const mapStateToProps = state => ({
  formulaire: state
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultatDuree);