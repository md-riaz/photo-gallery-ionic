import {
   IonActionSheet,
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
import './Tab2.css';
import { camera, close, trash } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { useState } from 'react';

const Tab2: React.FC = () => {
   const { photos, takePhoto, deletePhoto } = usePhotoGallery();
   const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Photo Gallery</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonActionSheet
            isOpen={!!photoToDelete}
            buttons={[
               {
                  text: 'Delete',
                  role: 'destructive',
                  icon: trash,
                  handler: () => {
                     if (photoToDelete) {
                        deletePhoto(photoToDelete);
                        setPhotoToDelete(undefined);
                     }
                  },
               },
               {
                  text: 'Cancel',
                  icon: close,
                  role: 'cancel',
               },
            ]}
            onDidDismiss={() => setPhotoToDelete(undefined)}
         />
         <IonContent>
            <IonGrid>
               <IonRow>
                  {photos.map((photo, index) => (
                     <IonCol size='6' key={index}>
                        <IonImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
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
