import firebase from 'firebase/app' // importujemy firebase app dla projektów webowych
import 'firebase/firestore' // tu importujemy interesujące nas usłgi czyli firestore i authenticaiton. Dzięki temu mamy dostęp do firebase.firestore() które niżej exportujemy o będą nam potrzebne 
import 'firebase/auth'

const config = { //obiekt konfiguracyjny otrzymany przy zakłądaniu projektu,  z którym inicjalizujemy Aplikację firebase.
    apiKey: "AIzaSyDwIb0f8PT2jxAROM_KM6XHLAiNjlWWgUs",
    authDomain: "crwn-db-ba9c9.firebaseapp.com",
    projectId: "crwn-db-ba9c9",
    storageBucket: "crwn-db-ba9c9.appspot.com",
    messagingSenderId: "166865139943",
    appId: "1:166865139943:web:f981d8af4a214758d54a42"
  };

  firebase.initializeApp(config); // inicjalizujemy Applikację z podaną w parametrze konfiguracją

  export const createUserProfileDocument = async (userAuth, additionalData) => { // parametr userAuth to obiekt auth użytkownika który dostajemy po zalogowaniu się przez google sign in
    if(!userAuth) return; // jeżeli userAuth nie istnieje to wychodzimyz tej funkcji
    const userRef = await firestore.doc(`users/${userAuth.uid}`) // wyciągamy documentReference z kolekcji users i obiekt użytkownika o podanym id
    const snapShot = await userRef.get(); // wyciągamy z userRef snapShot object który pozwoli nam na określenie czy w tym obiekcie znajdują się jakieś dane. W tym obeikcie znajduje się właściwośc exist o wartości true lub false w zależnosci czy dany obiekt istnieje w bazie danych 

    console.log(snapShot)
    if(!snapShot.exist) { // jeżeli dane we wskazanym miejscu istnieją czyli jeżeli na miejscu users/jakiesid istnieje juz cos to nie utworzy nowych danych.
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({ // dodajemy nowe dane do documentReference
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(err){ 
          console.log('error creating user', err.message)
      }
    }

    return userRef; // zwracamy userRef bo moze zaistnieć potrzeba użycia tego obiektu w innym miejscu
  }

  export const auth = firebase.auth(); // auth staje się biblioteką auth wyciągniętą z firebase
  export const firestore = firebase.firestore(); // firstore staje sie biblioteką firestore wyciągniętą z firebae


const provider = new firebase.auth.GoogleAuthProvider(); // tworzymy nową klasę / obiekt zdefiniowany - provider która ma funkcjonalność klasy GoogleAuthProvider, która jest wyciągnięta z klasy firebase i biblioteki/obiektu auth.
provider.setCustomParameters({ prompt: 'select_account' }) // provider czyli klasa z funkcjonalnością GoogleAuthProvider przyjmuje  parametry za pomocą metody setCustomParameters. Istnieje wiele różnych rodzajów parametrów które możemy tu przekazać. Tu przekazujemy parametr, który mówi że chcemy aby przy każdym wykorzystaniu klasy googleAuth pojawiał sie popup wyboru konta z google.

export const signInWithGoogle = () => { // eksportujemy funkcję która  wywołuje metodę z biblioteki auth   która jako parametr przyjmuje nasz provider.
    auth.signInWithPopup(provider)
}

export default firebase; // eksportujemy całą bibliotekę firebase na wpadek gdybyśmy jej potrzebowali