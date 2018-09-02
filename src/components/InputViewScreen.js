import React from 'react';
import PhoneInput from 'react-native-phone-input';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Header, Left, Text, Fab } from 'native-base';


class InputViewScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phonenumber: ''
    };
  }

  handleNumberSubmit = () => {

  }

  goback = () => {
    this.props.navigation.goBack();
  }

  handelPhoneNumberChange = (number) => {
    this.setState({
      phonenumber: number
    });
  }

  render() {
    const { selectedCountry } = this.props.navigation.state.params;
    return (
      <Container style={{padding: 20, width: '100%', height: '100%'}}>
        <Header transparent>
          <Left>
            <Icon name='arrow-left' style={{fontSize: 30}} onPress={this.goback} />
          </Left>
        </Header>
        <ScrollView
          scrollEnabled={false}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="always"
        >
          <Text style={{ marginTop: 30, marginBottom: 30, fontSize: 20}}>
            Enter your phone number
          </Text>
          <PhoneInput
            initialCountry={selectedCountry || 'us'}
            value=""
            style={{ borderBottomWidth: 2, paddingBottom: 10}}
            onChangePhoneNumber={this.handelPhoneNumberChange}
            textProps={{
              onFocus: this._navigateOnFocus,
              autoFocus: true,
              placeholder: '(555) 555-5555'
            }}
          />
          <View>
            <Fab
              onPress={this.handleNumberSubmit}
              style={{backgroundColor: 'gray'}}
              position="topRight"
            >
              <Icon name="check"/>
            </Fab>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default InputViewScreen;
