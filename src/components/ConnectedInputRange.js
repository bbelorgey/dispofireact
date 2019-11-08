import 'react-input-range/lib/css/index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capacite } from '../actions';
import InputRange from 'react-input-range';

const ConnectedInputRange = () => {

  handdleValue(champ,value) {
    const {capacite,formulaire} = this.props;
    let newFormulaire  = {...formulaire};
    newFormulaire[champ] = value;
    const {revenus, pretEnCours, mensualite, apport, duree, neuf, teg} = newFormulaire;
    capacite(revenus, pretEnCours, mensualite, apport, duree, neuf, teg);
  }


}

const mapDispatchToProps = dispatch => ({
  capacite: (revenus, pretEnCours, mensualite, apport, duree, neuf, teg) => dispatch(capacite(revenus, pretEnCours, mensualite, apport, duree, neuf, teg))
});

const mapStateToProps = state => ({
  formulaire : state
});

export default connect(mapStateToProps,mapDispatchToProps)(ConnectedInputRange);
