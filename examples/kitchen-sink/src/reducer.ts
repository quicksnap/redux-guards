import { combineReducers, Reducer } from 'redux';
import { Action } from 'redux';
import { isAction } from 'redux-guards';
import { isPackAction } from 'redux-guards/redux-pack';
import { addCount, delayedCount } from 'src/actions';
import { handle } from 'redux-pack';

export interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

// Note that type type of `action: Action` only defines { type: string }
// redux-guards handles further narrowing the type
export function reducer(state: AppState = initialState, action: Action) {
  // passing in the action creator to check against the type..
  if (isAction(action, addCount)) {
    // .. narrows the type correctly, allowing us to safely access action.payload
    return {
      ...state,
      count: state.count + action.payload,
    };
  }

  // Narrowing the type here with custom redux-pack typings ..
  if (isPackAction(action, delayedCount)) {
    // .. gives us an `action` of type ReduxPacky<...> that can be destructured
    // by `handle` into appropriate success/error/start types
    return handle(state, action, {
      success: (state, action) => {
        // Only here, within the `success` handler, can we access
        // action.payload safely
        return { ...state, count: state.count + action.payload };
      },
    });
  }

  // Default return if the above conditionals did not return.
  return state;
}
