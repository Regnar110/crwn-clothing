import {Component} from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop'
import Header from './components/header/Header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import { Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  unsubcribeFromAuth = null;
  

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => { // metoda przyjmująca obiekt user z obiektu auth jako parametr. W funkcji zmieniamy stan na tego użytkownika z obiektu auth. Jest to tzw open Subscription co oznacza ze nasza aplikacja komunikuje sie z firtebase i np jezeli sie nie wylogujemy z tego uzytkownika to on bedzie zapamietany iw racając do paplikacji bedziemy ciagle zalogoani na tym koncie.
      if(userAuth) { // sprawdzamy czu userAuth istnieje.
        const userRef = await createUserProfileDocument(userAuth) // z funckji createUserProfiuleDocument zwracamy userRef i ten userRef staje się tu tą zmienną. Jest to obiekt danego Użytkownika
        userRef.onSnapshot(snapShot => { // nasług\chujemy czy snapshot obiektu userRef się zmienił. W tej funkcji za każdym razem kiedy snapShot się zmieni aktualizujemy stan. Czyli np jak przeloguje się użytkownik
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data() // rozprzestrzeniamy resztę danych obiektuSnapshot. 
            })
        })
      } else  {
        setCurrentUser(userAuth) // kiedy użytkownik sie wyloguje stan zmieniamy na null
      }
    }) 
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();// wywołujemy utworzoną metodę aby zamknąć subskrybcję i zapobiec memory leak.
  }

  render() {
    const { currentUser } = this.props

    return (
      <div>
        <Header />
        <Switch>
            <Route exact path={'/'} component={Homepage}/>
            <Route exact path={'/shop'} component={ShopPage}/>
            <Route exact path={'/signin'} render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({user}) => ({ // z naszego stanu destrukturyzujemy reducer user
  currentUser: user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
