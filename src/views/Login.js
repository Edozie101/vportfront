import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text,  Body, Title } from 'native-base';


class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              User Login
            </Title>s
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email address"/>
            </Item>
            <Item>
              <Input placeholder="password"/>
            </Item>
            <Button
              style={styles.submitButton}
              block
            >
              <Text>Login</Text>
            </Button>
          </Form>
          <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            style={styles.signUpButton}
          >
            <Text style={styles.signUpButtonText}>
              Or create an account.
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#ABB2B9',
    marginBottom: 30,
    fontSize: 45
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: null,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signUpButtonText: {
    color: 'blue',
    textAlign: 'center'
  }
});
export default Login;
