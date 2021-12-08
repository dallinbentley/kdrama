import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonImg, IonThumbnail } from '@ionic/react';
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

  render() {
    return (
      <IonContent>
        <IonGrid>
          <IonRow>
          {
            this.state.movies
              .map((movie: any) =>
                  <IonCol size="2">
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>{movie.name.S}</IonCardTitle>
                        <IonCardSubtitle>{movie.genre.S}</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonImg src={"https://kdrama-proj.s3.us-east-2.amazonaws.com/images/" + movie.image.S}></IonImg>
                          <IonCardSubtitle>
                            Total Episodes: {movie.episodes.N} <br />
                            Rating : {movie.ratingValue.N} ({movie.ratingCount.N}) <br />
                            Air Date: {movie.aired.S} <br /><br />
                          </IonCardSubtitle>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                )
          }
          </IonRow>
        </IonGrid>
      </IonContent>
      // <IonPage>
      //   <IonHeader>
      //     <IonToolbar>
      //       <IonTitle>CardExamples</IonTitle>
      //     </IonToolbar>
      //   </IonHeader>
      //   <IonContent>
      //       <IonGrid>
      //           <IonRow>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                   Hello World
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //         </IonRow>
      //         <IonRow>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //         </IonRow>
      //         <IonRow>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //               <IonCol>
      //                 <IonCard>
      //                 <IonCardHeader>
      //                     <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      //                     <IonCardTitle>Card Title</IonCardTitle>
      //                 </IonCardHeader>

      //                 <IonCardContent>
      //                     Keep close to Nature's heart... and break clear away, once in awhile,
      //                     and climb a mountain or spend a week in the woods. Wash your spirit clean.
      //                 </IonCardContent>
      //                 </IonCard>
      //               </IonCol>
      //         </IonRow>
      //     </IonGrid>
      //   </IonContent>
      // </IonPage>
    );
  };
}

export default CardContainer;