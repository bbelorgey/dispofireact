import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { capacite } from '../actions';


import '../scss/resultat.scss';

const ResultatCapaciteAchat = ({ formulaire }) => {
const { mensualite, duree, taux, assurance, info } = formulaire;

let tauxMensuel= taux/(12*100);
let dureeMensuelle = duree*12;
let montantEmprunt = taux > 0 ? mensualite*(1-Math.pow((1+tauxMensuel),-dureeMensuelle))/tauxMensuel : mensualite * duree * 12;
let montantAssuranceMensuel = (assurance*montantEmprunt*duree)/100;
montantEmprunt = Math.round(montantEmprunt-montantAssuranceMensuel);

  return (
    <Col xs="12" md="6" className="mt-5">

      <Row>
        {/* resultat */}
        <Col xs="12" xl="6" className="resultGreen upContainer pt-5">
          <div>
            <i className="fas fa-city "></i>
          </div>
          <div>Capacité d'achat</div>
          <div>{montantEmprunt} €</div>
        </Col>

        {/* Détail */}
        <Col xs="12" xl="6" className="resultBlue upContainer">
          <div className="my-5">
            <div>Mensualités</div>
            <div>{mensualite} €</div>
            <div>Durée</div>
            <div>{duree} ans</div>
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
        Vous disposez de {montantEmprunt} € (capacité d'achat hors frais).
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultatCapaciteAchat);