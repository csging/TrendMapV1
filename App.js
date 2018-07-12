import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/MyPlaceDetail/MyPlaceDetail";
import configureStore from './src/store/configureStore';
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import firebase from 'firebase';
// import { Header, Button, Spinner } from './components/common';

const store = configureStore();

//Register Screens
Navigation.registerComponent("fomo-map.AuthScreen",
 () => AuthScreen, store, Provider);
Navigation.registerComponent("fomo-map.SharePlaceScreen",
 () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("fomo-map.FindPlaceScreen", 
() => FindPlaceScreen, store, Provider);
Navigation.registerComponent("fomo-map.PlaceDetailScreen",
() => PlaceDetailScreen, store, Provider);
Navigation.registerComponent( "fomo-map.SideDrawer", 
() => SideDrawer);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "fomo-map.AuthScreen", // unique ID registered with Navigation.registerScreen
    title: "Login" // title of the screen as appears in the nav bar (optional)
    }
  });


// class App extends Component {

//   state = { 
//       loggedIn: null, 
//       heroku: 'Test'
//   };

//     componentWillMount() {
//         firebase.initializeApp({
//                 apiKey: '',
//                 authDomain: 'auth-native-68d85.firebaseapp.com',
//                 databaseURL: 'https://auth-native-68d85.firebaseio.com',
//                 projectId: 'auth-native-68d85',
//                 storageBucket: 'auth-native-68d85.appspot.com',
//                 messagingSenderId: '906446458220'
//         });

//         firebase.auth().onAuthStateChanged((user) => {
//           Log.w("FIREBASE", "AUTHENTIFICATIONING");

//             if (user) {
//                 console.log(user.uid);
//                 this.setState({ loggedIn: true });
//             } else {
//                 console.log(user);
//                 this.setState({ loggedIn: false });
//             }
//         });

//         fetch('https://fomo-server.herokuapp.com').then((result) => result.json())
//         .then((resultData) => {
//         console.log(resultData);
//         this.setState({ heroku: resultData.hi });
//         }).catch((error) => console.log(error));
//     }

//     renderContent() {
//         switch (this.state.loggedIn) {
//             case true:
//                 return (
//                     <View style={{ flexDirection: 'row', paddingTop: 10 }}>
//                      <Button onPress={() => firebase.auth().signOut()}>
//                      {/* <Button> */}
//                      Log Out
//                      </Button>
//                      </View>
//                 );
//             case false:
//                 return <LoginForm />;
//             default:
//             return (
//                 <View style={{ flexDirection: 'row', paddingTop: 10 }}>
//                     <Spinner size='large' />
//                 </View>
//             );
//         }
//         // if (this.state.loggedIn) {
//         //     return (
//         //         <View style={{ flexDirection: 'row', paddingTop: 10 }}>
//         //         <Button>
//         //         Log Out
//         //         </Button>
//         //         </View>
//         //     );
//         // }
//         // return <LoginForm />;
//     }

//     render() {
//         return (
//             <View>
//                 <Header headerText='Authentication' />
//                {this.renderContent()}
//                <Text>{this.state.heroku}</Text>
//             </View>
//         );
//     }
// }

// export default App;

