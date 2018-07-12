// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import firebase from 'firebase';
// import { Button, Card, CardSection, Input, Spinner } from './common';

// class AuthScreen extends Component {
//     state = { 
//         email: '',
//         password: '',
//         error: '',
//         loading: false,
//     };

//     onButtonPress() {
//         const { email, password } = this.state;
//         Log.w("onButtonPress", "BUTTON PRESSED");
//         this.setState({ error: '', loading: true });

//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(this.onLoginSuccess.bind(this))
//             .catch(() => {
//                 firebase.auth().createUserWithEmailAndPassword(email, password)
//                     .then(this.onLoginSuccess.bind(this))
//                     .catch(() => {
//                         this.onLoginFail.bind(this);
//                         this.setState({ error: 'Authentication Failed.', loading: false });
//                     });
//             });
//     }

//     onLoginFail() {
//       Log.w("LOGIN FAILED", "AUTH FAILED");
//         this.setState({ error: 'Authentication Failed.', loading: false });
//     }

//     onLoginSuccess() {
//         this.setState({
//             email: '',
//             password: '',
//             loading: false,
//             error: ''
//         });
//     }

//     renderButton() {
//         if (this.state.loading) {
//             return <Spinner size='small' />;
//             // return <Text>Loading</Text>;
//          }
//          return (
//             <Button onPress={this.onButtonPress.bind(this)}>
//             Log in
//             </Button>  
//          );
//     }

//     render() {
//         return (
//           <Card>
//               <CardSection>
//                   <Input 
//                   label='Email'
//                   placeholder='user@gmail.com'
//                   value={this.state.email}
//                   onChangeText={email => this.setState({ email }, () => console.log(this.state.email))}
//                   />
//               </CardSection>
            
//               <CardSection>
//               <Input
//                     secureTextEntry
//                     label='Password'
//                     placeholder='password'
//                     value={this.state.password}
//                     onChangeText={password => this.setState({ password })}
//               />
//               </CardSection>  

//               <Text style={styles.errorTextStyle}>
//                 {this.state.error}
//               </Text>

//               <CardSection>
//                   {this.renderButton()} 
//                   {/* <Button onPress={this.onButtonPress.bind(this)}>
//                     Log in
//                   </Button>   */}
//               </CardSection>  
//           </Card>    
//         );
//     }
// }

// const styles = {
//     errorTextStyle: {
//         fontSize: 20,
//         alignSelf: 'center',
//         color: 'red'
//     }
// };

// export default AuthScreen;




import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/nasa-43569-unsplash.jpg";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-Mail Address"
              style={styles.input}
            />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
