import { IonContent, IonHeader, IonPage, IonImg, IonItem } from '@ionic/react';
import CardContainer from '../components/CardContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem>
          <IonImg className="logo" src="https://kdrama-proj.s3.us-east-2.amazonaws.com/images/Black+Initial+Fashion+Logo.png"></IonImg>
        </IonItem>
        <CardContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
