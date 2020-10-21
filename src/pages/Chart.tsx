import React, {useState} from 'react';
import Seat from "../components/Seat";
import "./Chart.css";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonFab, IonFabButton, IonFabList, IonFooter } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter, checkbox, closeCircleOutline } from 'ionicons/icons';

interface ContainerProps {
    name: string;
}

const Chart: React.FC<ContainerProps> = () => {
    const [showPopover, setShowPopover] = useState<{
      open: boolean;
      event: Event | undefined;
    }>({
      open: false,
      event: undefined,
    });
     const rows = [
       { numSeats: 10, shifted: true },
       { numSeats: 11, shifted: false },
       { numSeats: 7, shifted: true },
       { numSeats: 10, shifted: true },
     ];

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{"Law Course Title | Room ####"}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{"Law Course Title | Room ####"}</IonTitle>
            </IonToolbar>
          </IonHeader>

          {/* Design 1 */}
          

          {/* Design 2 */}
          {/*-- fab placed in the center of the content with a list on each side --*/}
          {/* <IonFab slot="fixed">
            <IonFabButton>
              <IonIcon icon={add} />
            </IonFabButton>
            <IonFabList side="start">
              <IonFabButton>
                <IonIcon icon={closeCircleOutline} />
              </IonFabButton>
            </IonFabList>
            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={checkbox} />
              </IonFabButton>
            </IonFabList>
          </IonFab> */}
      
      <div id="btndiv">
        <div id="outer">
            <div className="inner">
                <Seat></Seat>
            </div>
            <div className="inner">
                <Seat></Seat>
            </div>
            <div className="inner">
                 <Seat></Seat>
            </div>
            <div className="inner">
                 <Seat></Seat>
            </div>
            <div className="inner">
                 <Seat></Seat>
            </div>
        </div>

        <div id="outer2">
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
        </div>

        <div id="outer3">
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
        </div>

        <div id="outer4">
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
          <div className="inner">
               <Seat></Seat>
          </div>
        </div>
      </div>

            

        </IonContent>

        <IonFooter>
          <IonToolbar></IonToolbar>
        </IonFooter>
      </IonPage>
    );
};

export default Chart;
