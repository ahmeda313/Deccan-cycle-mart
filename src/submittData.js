import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://cycle-store-f2a71-default-rtdb.firebaseio.com",
  };
  

const app = initializeApp(firebaseConfig);
  

const database = getDatabase(app);



export default async function submitData(val){
    set(ref(database, 'users/' + `user${Math.trunc(Math.random()*10000000000)}`), {
        ...val
      });
}