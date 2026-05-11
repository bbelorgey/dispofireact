import '../scss/connexionInscription.scss';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const ConnexionInscription = ({ modalOpen, modalToggle }) => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter au backend d'authentification
  };

  return (
    <div className="modalHeader">
      <Modal isOpen={modalOpen} toggle={modalToggle}>
        <ModalHeader className="d-flex justify-content-center modalHeader">
          Bienvenue sur votre Espace Projet Immobilier
          <i className="fas fa-sign-in-alt mr-1 ml-1" />
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Mot de passe</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Mot de passe"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <p className="text-center">
              Vos codes sont strictement personnels et doivent être gardés secrets
            </p>
            <Button type="submit" className="px-4 loginButton">Entrez</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="button" className="px-4 loginButton">
            Je veux m'inscrire <i className="fas fa-user-plus mr-1 ml-1" />
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConnexionInscription;
