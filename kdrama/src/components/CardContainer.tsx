import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonImg, IonThumbnail, IonSelectOption } from '@ionic/react';
import axios from 'axios';
import './CardContainer.css';

class CardContainer extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    const body = { genre_str: 'All' };
    axios.post('https://nmbfapb9ge.execute-api.us-east-2.amazonaws.com/Project3/', body)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }

  filter(genre: string) {
    const body = {genre_str: genre};
    axios.post('https://nmbfapb9ge.execute-api.us-east-2.amazonaws.com/Project3/', body)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <div>
        <IonItem>
        <IonLabel>Genre</IonLabel>
        <IonSelect onIonChange={e => this.filter(e.detail.value)}>
          <IonSelectOption value="All">All</IonSelectOption>
          <IonSelectOption value="Thriller">Thriller</IonSelectOption>
          <IonSelectOption value="Life">Life</IonSelectOption>
          <IonSelectOption value="Historical">Historical</IonSelectOption>
          <IonSelectOption value="Military">Military</IonSelectOption>
          <IonSelectOption value="Comedy">Comedy</IonSelectOption>
          <IonSelectOption value="Psychological">Psychological</IonSelectOption>
          <IonSelectOption value="Crime">Crime</IonSelectOption>
          <IonSelectOption value="Mystery">Mystery</IonSelectOption>
          <IonSelectOption value="Friendship">Friendship</IonSelectOption>
          <IonSelectOption value="Romance">Romance</IonSelectOption>
          <IonSelectOption value="Action">Action</IonSelectOption>
          <IonSelectOption value="Medical">Medical</IonSelectOption>
          <IonSelectOption value="Law">Law</IonSelectOption>
        </IonSelect>
      </IonItem><IonGrid>
          <IonRow>
            {this.state.movies
              .map((movie: any) => <IonCol size="2">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{movie.name.S}</IonCardTitle>
                    <IonCardSubtitle>{movie.genre.S}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonImg src={"https://kdrama-proj.s3.us-east-2.amazonaws.com/images/" + movie.image.S}></IonImg>
                    <IonCardSubtitle>
                      Total Episodes: {movie.episodes.N} <br />
                      Rating: {movie.ratingValue.N} ({movie.ratingCount.N}) <br />
                      Air Date: {movie.aired.S} <br /><br />
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              )}
          </IonRow>
        </IonGrid>
      </div>
    );
  };
}

export default CardContainer;