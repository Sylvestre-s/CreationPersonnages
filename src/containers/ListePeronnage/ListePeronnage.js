import React, { Component } from "react";
import axios from "axios";
import TitreH3 from "../../components/Titres/TitreH3/TitreH3";
import PersonnageAffiché from "./PersonnageAffiché/PersonnageAffiché";

class ListePeronnage extends Component {
  state = {
    personnages: null,
  };

  loadData = () => {
    this.setState({ loading: true });
    axios
      .get(
        "https://creaperso-bcca8-default-rtdb.europe-west1.firebasedatabase.app/persos.json"
      )
      // On requete le serveur en lui demandant de se rendre dans persos.json
      .then((reponse) => {
        const tabPersonnages = Object.values(reponse.data);
        // On met toutes les valeurs dans un tableau, que l'on met dans tabPersonnage
        this.setState({
          personnages: tabPersonnages,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {
    this.loadData();
  };

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.refresh !== this.props.refresh) {
      this.loadData();
    }
  };

  render() {
    return (
      <>
        {this.state.loading && <div>Chargement ...</div>}
        {!this.state.loading && this.state.personnages && (
          <div className="row no-gutter ">
            {this.state.personnages.map((perso, indice) => {
              return (
                <div className="col-6" key={indice}>
                  <TitreH3> {perso.nom}</TitreH3>
                  <PersonnageAffiché {...perso.perso} />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default ListePeronnage;
