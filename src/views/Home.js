import React from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Container } from 'native-base';
import PhoneInput from 'react-native-phone-input';

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: '',
      countryIso: ''
    };
  }

  onChangePhoneNumber = (number) => {
    this.setState({phoneNumber: number});
  }
  _navigateOnFocus = () => {
    this.props.navigation.navigate(
      'InputView',
      { selectedCountry: this.state.countryIso }
    );
  }

  _handleAuthTextClick = () => this.props.navigation.navigate('Login');

  selectCountry = (country) => {
    this.setState({ countryIso: country });
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../assets/images/vport-login-bg.jpg')}
          style={styles.imageContainer}
        >
          <StatusBar barStyle="light-content"/>
          <View style={styles.container}>
            <View
              style={styles.brandTextBox}
            >
              <Text style={{fontWeight: 'bold'}}>VPORT</Text>
            </View>
          </View>
          <View style={styles.gettingStartContainer}>
            <View style={{
              flex: 3,
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'grey'
            }}
            >
              <Text style={{ flex: 1, fontSize: 30, color: 'grey'}}>
                Get Moving with VPort
              </Text>
              <PhoneInput
                style={{flex: 1}}
                onSelectCountry={this.selectCountry}
                onChangePhoneNumber={this.onChangePhoneNumber}
                textProps={{
                  placeholder: 'Enter your phone number',
                  onFocus: this._navigateOnFocus
                }}
              />
            </View>
            <TouchableWithoutFeedback onPress={this._handleAuthTextClick}>
              <View
                style={styles.socialLoginTextWrapper}>
                <Text style={{color: 'darkblue', fontSize: 20}}>
                  Or connect using social account.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTextBox: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gettingStartContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '40%',
  },
  socialLoginTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  }
});

export default Home;
