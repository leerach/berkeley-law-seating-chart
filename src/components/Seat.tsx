import React, { useState } from "react";
import "./Seat.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonFab, IonFabButton, IonFabList, IonFooter } from "@ionic/react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { IonPopover } from "@ionic/react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  add,
  settings,
  share,
  person,
  arrowForwardCircle,
  arrowBackCircle,
  arrowUpCircle,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  checkbox,
  closeCircleOutline,
} from "ionicons/icons";

interface ContainerProps {
}


const Seat: React.FC<ContainerProps> = () => {
    const [showPopover, setShowPopover] = useState<{
      open: boolean;
      event: Event | undefined;
    }>({
      open: false,
      event: undefined,
    });
  return (
    <div>
      <>
        <IonPopover
          isOpen={showPopover.open}
          cssClass="my-custom-class"
          event={showPopover.event}
          onDidDismiss={(e) =>
            setShowPopover({ open: false, event: undefined })
          }
        >
          <p>Are you sure you want to select this seat?</p>
        </IonPopover>
        <IonButton
          onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })}
        >
          Seat
        </IonButton>
      </>
    </div>
    
  );
};

export default Seat;