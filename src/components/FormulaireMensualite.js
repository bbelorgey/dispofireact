import 'react-input-range/lib/css/index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capacite } from '../actions';
import InputRange from 'react-input-range';

import { Row, Col, Button, Label } from 'reactstrap';

class FormulaireMensualite extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handdleButton = this.handdleButton.bind(this);
    this.handdleValue = this.handdleValue.bind(this);
  }

  handdleButton() {
    const { calculMensualite, formulaire } = this.props;
    let newFormulaire = { ...formulaire };
    newFormulaire["neuf"] = !newFormulaire["neuf"];
    const {neuf, mensualite, duree, taux, assurance, montant, info} = newFormulaire;
    calculMensualite(neuf, mensualite, duree, taux, assurance, montant, info);
  }

  handdleValue(champ, value) {
    const { calculMensualite, formulaire } = this.props;
    let newFormulaire = { ...formulaire };
    newFormulaire[champ] = value;
    const {neuf, mensualite, duree, taux, assurance, montant, info} = newFormulaire;
    calculMensualite(neuf, mensualite, duree, taux, assurance, montant, info);
  }

  render() {
    const { neuf, duree, taux, assurance, montant } = this.props.formulaire;
    return (
      //                                     formulaire
      <Col xs="12" md="5" className="px-5">
        <Label for="revenus" className="mb-4 mt-3 label">État du logement*</Label>
        <Row className="d-flex justify-content-around">
          {/*                                            neuf ou ancien                                                      */}
          <Button onClick={this.handdleButton} className={neuf ? "btn-active" : "btn-inactive"} size="lg">{neuf ? <i className="far fa-check-circle"></i> : ''}Neuf</Button>{' '}
          <Button onClick={this.handdleButton} className={!neuf ? "btn-active" : "btn-inactive"} size="lg">{!neuf ? <i className="far fa-check-circle"></i> : ''}Ancien</Button>
        </Row>

        {/*                                            Montant souhaité                                                    */}
        <Label for="mensualite" className="mb-4 mt-3 label">Montant du prêt</Label>
        <InputRange
          step={5000}
          formatLabel={value => `${value}€`}
          minValue={0}
          maxValue={500000}
          value={montant}
          onChange={value => this.handdleValue('montant', value)} />

        {/*                                            Durée du prêt                                                        */}
        <Label for="mensualite" className="mb-4 mt-3 label">Durée du prêt</Label>
        <InputRange
          step={1}
          formatLabel={value => `${value}ans`}
          minValue={2}
          maxValue={25}
          value={duree}
          onChange={value => this.handdleValue('duree', value)} />
        {/*                                           taux du prêt                                                        */}
        <Label for="taux" className="mb-4 mt-3 label">Taux*</Label>
        <InputRange
          step={0.05}
          formatLabel={value => `${value}%`}
          minValue={0}
          maxValue={10}
          value={taux}
          onChange={value => this.handdleValue('taux', Number(value.toFixed(2)))} />
        {/*                                           assurance                                                        */}
        <Label for="assurance" className="mb-4 mt-3 label">Taux d'assurance</Label>
        <InputRange
          step={0.05}
          formatLabel={value => `${value}%`}
          minValue={0}
          maxValue={1}
          value={assurance}
          onChange={value => this.handdleValue('assurance', Number(value.toFixed(2)))} />
      </Col>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  calculMensualite: (neuf, mensualite, duree, taux, assurance, montant, info) => dispatch(capacite(neuf, mensualite, duree, taux, assurance, montant, info))
});

const mapStateToProps = state => ({
  formulaire: state
});

export default connect(mapStateToProps, mapDispatchToProps)(FormulaireMensualite);
