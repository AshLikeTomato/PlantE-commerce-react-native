import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//cái này dùng để connect với firebase
const firebaseConfig = {
    //enter your key
};
const app =  firebase.initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };

//firebase đây nhé
//chổ này dùng để connect tới thằng firebase
//này là t đang dùng ỉebase của t
//mở firebase đi