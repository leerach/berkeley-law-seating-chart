import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

export const Profile: React.FC = () => {

    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItemDivider>Name</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>

                    <IonItemDivider>School Email</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                    </IonItem>

                    <IonItemDivider>Year</IonItemDivider>
                    <IonItem>
                        <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Default Label</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Floating Label</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="fixed">Fixed Label</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Stacked Label</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Profile