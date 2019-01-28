import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { capacite } from '../actions';


import '../scss/resultat.scss';

const ResultatMensualite = ({ formulaire }) => {
const { duree, taux, assurance, montant, info } = formulaire;

let tauxMensuel= (taux)/(12*100);
let dureeMensuelle = duree*12;
let montantAssuranceMensuel = (assurance*montant)/(100*12)

  let calculMmensualite = tauxMensuel > 0 
    ? Math.round( montant*tauxMensuel/(1-Math.pow((1+tauxMensuel),-dureeMensuelle))+montantAssuranceMensuel)
    : Math.round(montant/dureeMensuelle+montantAssuranceMensuel);

  return (
    <Col xs="12" md="6" className="mt-5">

      <Row>
        {/* resultat */}
        <Col xs="12" xl="6" className="resultGreen upContainer pt-5">
          <div>
            <i className="fas fa-city "></i>
          </div>
          <div>Mensualité</div>
          <div>{calculMmensualite} €</div>
        </Col>

        {/* Détail */}
        <Col xs="12" xl="6" className="resultBlue upContainer">
          <div className="my-5">
            <div>Capacité d'achat</div>
            <div>{montant} €</div>
            <div>Durée du prêt</div>
            <div>{duree} ans</div>
          </div>
        </Col>

        {/* Taux  */}
        <Col xs="12" xl="6" className="mt-1 resultBlue">
          <div>
            TAUX : {taux} %
          </div>
        </Col>
        {/* Taux assurance */}
        <Col xs="12" xl="6" className="mt-1 resultGreen">
          <div>Assurance : {assurance} %</div>
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
  capacite: ( mensualite, apport, duree, neuf, taux, montant) => dispatch(capacite(mensualite, duree, neuf, taux))
});

const mapStateToProps = state => ({
  formulaire: state
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultatMensualite);