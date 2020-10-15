import React, { useState } from "react";
import "./Seat.css";
import { IonFab, IonFabButton, IonFabList, IonFooter } from "@ionic/react";
import {
  IonButton,
} from "@ionic/react";
import { IonPopover } from "@ionic/react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";

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
          cssClass="seat-class"
          event={showPopover.event}
          onDidDismiss={(e) =>
            setShowPopover({ open: false, event: undefined })
          }
        >
          <p>Are you sure you want to select this seat?</p>
          <IonButton color="success">Yes</IonButton>
          <IonButton color="danger">No</IonButton>
        </IonPopover>
        <IonButton fill = 'solid' color = 'secondary'
          onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })}
        >
          Seat
        </IonButton>
      </>
    </div>
  );
};

export default Seat;