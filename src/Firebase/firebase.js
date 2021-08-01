import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import { firebaseConfig } from "./Firebaseconfig"


  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp();

  export {db,auth,provider,storage,timestamp};