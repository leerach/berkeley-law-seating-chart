import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { CardExamples } from '../components/Card';
import ExploreContainer from '../components/ExploreContainer';

const Profile: React.FunctionComponent = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{"Profile"}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{"Profile"}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                Under Construction
            </IonContent>
        </IonPage>
    );
};
export default Profile;