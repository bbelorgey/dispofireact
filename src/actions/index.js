export const CAPACITE = 'CAPACITE';
export const CALCULMENSUALITE = 'CALCULMENSUALITE';

export const capacite = ( neuf, mensualite, duree, taux, assurance, montant, info ) => ({
  type: CAPACITE, neuf, mensualite, duree, taux, assurance, montant, info
});

export const calculMensualite = ( neuf, mensualite, duree, taux, assurance, montant, info ) => ({
  type: CALCULMENSUALITE, neuf, mensualite, duree, taux, assurance, montant, info
});