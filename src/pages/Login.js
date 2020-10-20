import React from 'react';
import {IonContent, IonLabel, IonInput, IonItem, IonPage, IonButton, IonRow, IonCol, IonRouterLink} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader.js';

const Login = () => {
    return(
        <IonPage>
            <NavHeader title="Log In" />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" required></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="password" type="password" required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block">
                            Log In
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonRouterLink routerLink={`/forgot`}>
                            Forgot password?
                        </IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;