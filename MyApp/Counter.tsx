import React, { Component } from 'react';
import { Text, Button, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch} from 'redux';
import type { State} from './redux/store/store'
import actions from "./redux/action-creators";

class CounterPage extends Component<{ count: number, counter_add: any, counter_sub: any }> {

  render() {
    return (
      <View>
        <Button title="+" onPress={() => this.props.counter_add(1)} />
        <Text>{this.props.count}</Text>
        <Button title="-" onPress={() => this.props.counter_sub(1)} />
      </View>
    );
  }
}

const mapStateToProps = (state: State) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)
