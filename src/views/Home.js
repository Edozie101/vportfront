import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


export class Home extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <View style={styles.container}>
        <Text style={styles['vport-test']}>Vport Frontend</Text>
        <Text style={styles.user}>I am, {user.firstName}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'vport-test': {
    fontSize: 30,
    color: 'red'
  },
  user: {
    color: 'green',
    fontSize: 20
  }
});
