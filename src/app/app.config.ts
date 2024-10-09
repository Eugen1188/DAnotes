import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-237c7","appId":"1:626811176615:web:0fc6792b472c5484257d82","storageBucket":"danotes-237c7.appspot.com","apiKey":"AIzaSyCwZDsN1yQxieapqZZR_we06ZVtYY9F4CI","authDomain":"danotes-237c7.firebaseapp.com","messagingSenderId":"626811176615"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
