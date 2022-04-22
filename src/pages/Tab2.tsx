import {
   IonCol,
   IonContent,
   IonFab,
   IonFabButton,
   IonGrid,
   IonHeader,
   IonIcon,
   IonImg,
   IonPage,
   IonRow,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
   const { takePhoto, photos } = usePhotoGallery();

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Photo Gallery</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent>
            <IonGrid>
               <IonRow>
                  {photos.map((photo, index) => (
                     <IonCol size='6' key={index}>
                        <IonImg src={photo.webviewPath} />
                     </IonCol>
                  ))}
               </IonRow>
            </IonGrid>
            <IonFab vertical='bottom' horizontal='center' slot='fixed'>
               <IonFabButton onClick={() => takePhoto()}>
                  <IonIcon icon={camera} />
               </IonFabButton>
            </IonFab>
         </IonContent>
      </IonPage>
   );
};

export default Tab2;
