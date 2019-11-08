import React from 'react';
import CapaciteAchat from './CapaciteAchat'
import CalculMensualite from './CalculMensualite'
import CalculDuree from './CalculDuree'
import PretTauxZero from './pretTauxZero';
import ScroolToTop from './ScroolToTop';

const DispatchId = () => (
  <div >
    <section id="capaciteAchat">
      <CapaciteAchat />
    </section>
    <section id="calculMensualite">
      <CalculMensualite />
    </section>
    <section id="calculDuree">
      <CalculDuree />
    </section>
    <section id="pretTauxZero">
      <PretTauxZero />
    </section>
    <ScroolToTop />
  </div>
)

export default DispatchId;