import React from 'react';
import {IonContent, IonLabel, IonInput, IonItem, IonPage, IonButton, IonRow, IonCol} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader.js';

const Forgot = () => {
    return(
        <IonPage>
            <NavHeader title="Reset Password" />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block">
                            Get Reset Link
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Forgot;