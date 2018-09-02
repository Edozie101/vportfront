import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Header, Content, Form, Item, Input, Button, Text,  Body, Title } from 'native-base';

class Signup extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>User Registration</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="First Name" />
            </Item>
            <Item>
              <Input placeholder="Last Name"/>
            </Item>
            <Item>
              <Input placeholder="Email address"/>
            </Item>
            <Item>
              <Input placeholder="Password"/>
            </Item>
            <Item>
              <Input placeholder="Confirm password"/>
            </Item>
            <Button
              style={styles.submitButton}
              block
            >
              <Text>Signup</Text>
            </Button>
          </Form>
          <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              Or login here
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
  loginButton: {
    display: 'flex',
    backgroundColor: null,
    margin: 20,
    alignItems: 'center'
  },
  loginButtonText: {
    color: 'blue',
    textAlign: 'center'
  }
});

export default Signup;
