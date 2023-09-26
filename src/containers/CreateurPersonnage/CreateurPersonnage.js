import React, { Component } from "react";
import TitreH1 from "../../components/Titres/TitreH1/TitreH1";
import TitreH2 from "../../components//Titres/TitreH2/TitreH2";
import Bouton from "../../components/Bouton/Bouton";
import Personnage from "./Personnage/Personnage";
import Familiers from "../familiers/familiers";
import Nom from "../../components/Nom/Nom";
import axios from "axios";

export class CreateurPersonnage extends Component {
  state = {
    // Nous pouvons créer des objets à l'intérieur de nos states pour stocker les données
    personnage: {
      image: 1,
      force: 0,
      agilite: 0,
      intelligence: 0,
      familier: null,
    },
    nbPointsDisponibles: 7,
    familiers: null,
    zoomedFamilier: null,
    loading: false,
    nom: "",
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get(
        "https://creaperso-bcca8-default-rtdb.europe-west1.firebasedatabase.app/familiers.json"
      )
      .then((reponse) => {
        const familiersArray = Object.values(reponse.data);
        this.setState({
          familiers: familiersArray,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  handleImagePrecedente = () => {
    this.setState((oldState) => {
      const newPersonnage = { ...oldState.personnage };
      if (oldState.personnage.image <= 1) newPersonnage.image = 3;
      else newPersonnage.image--;
      return { personnage: newPersonnage };
    });
  };

  handleImageSuivante = () => {
    this.setState((oldState) => {
      const newPersonnage = { ...oldState.personnage };
      if (oldState.personnage.image >= 3) newPersonnage.image = 1;
      else newPersonnage.image++;
      return { personnage: newPersonnage };
    });
  };

  handleEnleverPoint = (caract) => {
    this.setState((oldState, props) => {
      if (
        oldState.personnage[caract] <= 0 ||
        oldState.nbPointsDisponibles >= 7
      ) {
        return null;
      }
      const newPointCaract = oldState.personnage[caract] - 1;

      const newPersonnage = { ...oldState.personnage };
      const newNbPointsDisponible = oldState.nbPointsDisponibles + 1;

      newPersonnage[caract] = newPointCaract;
      return {
        personnage: newPersonnage,
        nbPointsDisponibles: newNbPointsDisponible,
      };
    });
  };

  handleAjouterPoint = (caract) => {
    this.setState((oldState, props) => {
      if (
        oldState.personnage[caract] >= 5 ||
        oldState.nbPointsDisponibles <= 0
      ) {
        return null;
      }
      const newPointCaract = oldState.personnage[caract] + 1;

      const newPersonnage = { ...oldState.personnage };
      const newNbPointsDisponible = oldState.nbPointsDisponibles - 1;
      // On le fait en deux fois car le state est divisé en deux.

      newPersonnage[caract] = newPointCaract;
      return {
        personnage: newPersonnage,
        nbPointsDisponibles: newNbPointsDisponible,
        // On renvoit donc deux informations différentes
      };
    });
  };

  handleChangeFamilierPersonnage = (familier) => {
    const newPerso = { ...this.state.personnage };
    newPerso.familier = familier;

    this.setState({ personnage: newPerso });
  };

  handleReinitialisation = () => {
    this.setState({
      personnage: {
        image: 1,
        force: 0,
        agilite: 0,
        intelligence: 0,
        familier: null,
      },
      nbPointsDisponibles: 7,
      familiers: ["Le chat", "Le dragon", "Le phoenix", "La gélatine"],
      nom: "",
      zoomedFamilier: null,
    });
  };

  handleValidation = () => {
    this.setState({ loading: true });
    // On affiche le message "en cour..." en cas de temps de chargement
    const player = {
      perso: { ...this.state.personnage },
      nom: this.state.nom,
    };
    axios
      .post(
        "https://creaperso-bcca8-default-rtdb.europe-west1.firebasedatabase.app/persos.json",
        player
      )
      .then((reponse) => {
        console.log(reponse);
        this.setState({ loading: false });
        this.handleReinitialisation();
        this.props.refresh();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
        this.handleReinitialisation();
      });
  };

  handleChangeNom = (event) => {
    this.setState({ nom: event.target.value });
  };

  handleZoomFamilier = (familier) => {
    if (this.state.zoomedFamilier === familier) {
      this.setState({ zoomedFamilier: null });
    } else {
      this.setState({ zoomedFamilier: familier });
    }
  };

  render() {
    return (
      <div className="container">
        <TitreH1>Créateur de personnage</TitreH1>
        {this.state.loading && <div>Chargement en cours...</div>}
        <Nom nom={this.state.nom} changeNom={this.handleChangeNom} />
        <Personnage
          {...this.state.personnage}
          precedente={this.handleImagePrecedente}
          suivante={this.handleImageSuivante}
          nbPointsDisponibles={this.state.nbPointsDisponibles}
          enleverPoint={this.handleEnleverPoint}
          ajouterPoint={this.handleAjouterPoint}
        />
        <TitreH2>Les compagnons</TitreH2>

        {this.state.familiers && (
          <Familiers
            listeFamiliers={this.state.familiers}
            changeFamilier={this.handleChangeFamilierPersonnage}
            currentFamilier={this.state.personnage.familier}
            zoomFamilier={this.handleZoomFamilier}
            zoomedFamilier={this.state.zoomedFamilier}
          />
        )}

        <div className="row no-gutters">
          <Bouton
            typeBtn="btn-primary"
            css="col-6"
            clic={this.handleReinitialisation}
          >
            Réinitialiser
          </Bouton>
          <Bouton
            typeBtn="btn-warning"
            css="col-6"
            clic={this.handleValidation}
          >
            Créer
          </Bouton>
        </div>
      </div>
    );
  }
}

export default CreateurPersonnage;
