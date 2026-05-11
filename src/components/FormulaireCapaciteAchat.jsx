import 'react-input-range/lib/css/index.css';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormulaire } from '../store';
import InputRange from 'react-input-range';
import { Row, Col, Button, Label } from 'reactstrap';

const FormulaireCapaciteAchat = () => {
  const { neuf, mensualite, duree, taux, assurance } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleButton = useCallback(() => {
    dispatch(updateFormulaire({ neuf: !neuf, montant: 0 }));
  }, [dispatch, neuf]);

  const handleValue = useCallback((champ, value) => {
    dispatch(updateFormulaire({ [champ]: value, montant: 0 }));
  }, [dispatch]);

  return (
    <Col xs="12" md="5" className="px-5">
      <Label className="mb-4 mt-3 label">État du logement*</Label>
      <Row className="d-flex justify-content-around">
        <Button onClick={handleButton} className={neuf ? 'btn-active' : 'btn-inactive'} size="lg">
          {neuf && <i className="far fa-check-circle" />} Neuf
        </Button>{' '}
        <Button onClick={handleButton} className={!neuf ? 'btn-active' : 'btn-inactive'} size="lg">
          {!neuf && <i className="far fa-check-circle" />} Ancien
        </Button>
      </Row>

      <Label className="mb-4 mt-3 label">Mensualité souhaitée</Label>
      <InputRange
        step={100} formatLabel={v => `${v}€`} minValue={50} maxValue={10000}
        value={mensualite} onChange={v => handleValue('mensualite', v)} />

      <Label className="mb-4 mt-3 label">Durée du prêt</Label>
      <InputRange
        step={1} formatLabel={v => `${v} ans`} minValue={2} maxValue={25}
        value={duree} onChange={v => handleValue('duree', v)} />

      <Label className="mb-4 mt-3 label">Taux d'intérêt</Label>
      <InputRange
        step={0.05} formatLabel={v => `${v}%`} minValue={0} maxValue={10}
        value={taux} onChange={v => handleValue('taux', Number(v.toFixed(2)))} />

      <Label className="mb-4 mt-3 label">Taux d'assurance</Label>
      <InputRange
        step={0.05} formatLabel={v => `${v}%`} minValue={0} maxValue={1}
        value={assurance} onChange={v => handleValue('assurance', Number(v.toFixed(2)))} />
    </Col>
  );
};

export default FormulaireCapaciteAchat;
