import '../scss/connexionInscription.scss';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';



class ConnexionInscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { modalOpen, modalToggle } = this.props;
    const { email, password } = this.state;
    return (
      <div className="modalHeader">
{/*                                   Login                               */}
        <Modal isOpen={modalOpen} toggle={modalToggle}>
          <ModalHeader className="d-flex justify-content-center modalHeader">
            <div name="" onClick={this.modalToggle}>
              Bienvenue sur votre Espace Projet Immobilier
              <i className="fas fa-sign-in-alt mr-1 ml-1"></i>
            </div>
          </ModalHeader>
          <ModalBody>
{/*                           formulaire de cpnnexion                     */}
            <Form >
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" value={email} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Mot de passe</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" value={password} onChange={this.handleChange} />
              </FormGroup>
              <p className="text-center">
                Vos codes sont strictement personnels et doivent être gardés secrets
              </p>
              <Button className="px-4 loginButton" >Entrez</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="px-4 loginButton">Je veux m'inscrire<i className="fas fa-user-plus mr-1 ml-1" /></Button>
          </ModalFooter>
        </Modal>
      </div >
    )
  }
}

export default ConnexionInscription;