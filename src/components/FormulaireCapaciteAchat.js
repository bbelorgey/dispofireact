import 'react-input-range/lib/css/index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capacite } from '../actions';
import InputRange from 'react-input-range';

import { Row, Col, Button, Label } from 'reactstrap';

class FormulaireCapaciteAchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handdleButton = this.handdleButton.bind(this);
    this.handdleValue = this.handdleValue.bind(this);
  }

  handdleButton() {
    const { capacite, formulaire } = this.props;
    let newFormulaire = { ...formulaire };
    newFormulaire["neuf"] = !newFormulaire["neuf"];
    const { neuf, mensualite, duree, taux, assurance, montant } = newFormulaire;
    capacite(neuf, mensualite, duree, taux, assurance, montant);
  }
                          // stockage des valeurs dans redux
  handdleValue(champ, value) {
    console.log(champ,value)
    const { capacite, formulaire } = this.props;
    let newFormulaire = { ...formulaire };
    newFormulaire[champ] = value;
    newFormulaire['montant'] = 0;
    const { neuf, mensualite, duree, taux, assurance, montant, info } = newFormulaire;
    capacite(neuf, mensualite, duree, taux, assurance, montant, info);
  }

  render() {
    const { neuf, mensualite, duree, taux, assurance } = this.props.formulaire;
    return (
      //                                    formulaire
      <Col xs="12" md="5" className="px-5">
        <Label for="revenus" className="mb-4 mt-3 label">État du logement*</Label>
        <Row className="d-flex justify-content-around">
          {/*                                            neuf ou ancien                                                      */}
          <Button onClick={this.handdleButton} className={neuf ? "btn-active" : "btn-inactive"} size="lg">{neuf ? <i className="far fa-check-circle"></i> : ''}Neuf</Button>{' '}
          <Button onClick={this.handdleButton} className={!neuf ? "btn-active" : "btn-inactive"} size="lg">{!neuf ? <i className="far fa-check-circle"></i> : ''}Ancien</Button>
        </Row>

        {/*                                            Mensualité souhaitée                                                    */}
        <Label for="mensualite" className="mb-4 mt-3 label">Mensualité souhaitée</Label>
        <InputRange
          step={100}
          formatLabel={value => `${value}€`}
          minValue={50}
          maxValue={10000}
          value={mensualite}
          onChange={value => this.handdleValue('mensualite', value)} />

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
        <Label for="taux" className="mb-4 mt-3 label">Taux d'intérêt</Label>
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
  capacite: (neuf, mensualite, duree, taux, assurance, montant, info) => dispatch(capacite(neuf, mensualite, duree, taux, assurance, montant, info))
});

const mapStateToProps = state => ({
  formulaire: state
});

export default connect(mapStateToProps, mapDispatchToProps)(FormulaireCapaciteAchat);
