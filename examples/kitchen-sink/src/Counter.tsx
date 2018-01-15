import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'src/reducer';
import { addCount, delayedCount } from 'src/actions';

type CounterProps = {
  count: number;
  dispatch: Dispatch<AppState>;
};

const DELAY_TIMEOUT_MS = 500;

class CounterPure extends React.Component<CounterProps> {
  render() {
    return (
      <div>
        <h1>Current count: {this.props.count}</h1>
        <div>
          <h3>Normal Counter:</h3>
          <button
            onClick={() => {
              // The returned type is: {payload: number;} & {type: string;}
              const returnedValue = this.props.dispatch(addCount(1));
            }}
          >
            Increment
          </button>
          <button onClick={() => this.props.dispatch(addCount(-1))}>
            Decrement
          </button>
        </div>

        <div>
          <h3>
            Delayed Counter: (will pause {DELAY_TIMEOUT_MS}ms before
            incrementing)
          </h3>
          <button
            onClick={() => {
              // The returned type is: Promise<T | {error: any}>
              const returnedValue = this.props.dispatch(
                delayedCount(1, DELAY_TIMEOUT_MS),
              );
            }}
          >
            Increment
          </button>
          <button
            onClick={() =>
              this.props.dispatch(delayedCount(-1, DELAY_TIMEOUT_MS))
            }
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export const Counter = connect((state: AppState) => ({
  count: state.count,
}))(CounterPure);
