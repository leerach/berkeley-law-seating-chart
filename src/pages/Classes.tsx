import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, chevronForwardCircleOutline, wine, warning, walk } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { CardExamples } from '../components/Card';

const Classes: React.FunctionComponent = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{"Classes"}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{"Classes"}</IonTitle>
                    </IonToolbar>
                </IonHeader>
        <CardExamples/>

            {/* Design 1 */}
                <IonCard>
                    <IonItem href="#" className="ion-activated">
                        <IonIcon icon={chevronForwardCircleOutline} slot="start" />
                        <IonCardHeader>
                            <IonCardSubtitle>Course # 1234</IonCardSubtitle>
                            <IonCardTitle>Law Course Title</IonCardTitle>
                            <IonCardContent>
                                Professor Smith
                            </IonCardContent>
                        </IonCardHeader>

                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonItem href="#" className="ion-activated">
                        <IonIcon icon={chevronForwardCircleOutline} slot="start" />
                        <IonCardHeader>
                            <IonCardSubtitle>Course # 1234</IonCardSubtitle>
                            <IonCardTitle>Law Course Title</IonCardTitle>
                            <IonCardContent>
                                Professor Smith, Room 00
                            </IonCardContent>
                        </IonCardHeader>

                    </IonItem>
                </IonCard>

                {/* Design 2 */}
                <IonCard>
                    <IonItem>
                        <IonIcon icon={chevronForwardCircleOutline} slot="start" />
                        <IonLabel>Law Course Title Example 2</IonLabel>
                        <IonButton fill="outline" slot="end">Select Seat</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Course #1234
                        
                    </IonCardContent>
                </IonCard>

                
            </IonContent>
        </IonPage>
    );
};
export default Classes;