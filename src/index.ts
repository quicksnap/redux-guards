export * from './redux-pack';
import { Action } from 'redux';
// This also allows us to dispatch an action without a `type` defined in type
// signature. Useful since our typings lack `type` until TS supports variadic types
declare module 'redux' {
  export interface Dispatch<S> {
    // Allow us to dispatch actions without "type" key, since our methods
    // obscure that it's present
    <A extends { payload: any }>(action: A): A & { type: string };
    <A extends {}>(action: A): A & { type: string };
  }
}

export type IActionType<X> = X & { __actionType: string };

const _devSet: { [key: string]: any } = {};
// __actionType is used as the sentinal value in the `isAction` type guard
// functions. We need this so we can simply use the action creator function as
// the action type itself.
export function _makeActionInternal<Z extends {}>(
  type: string,
  typePrefix = '',
) {
  // Helpful check against copy-pasting duplicate type keys when creating new actions.
  if (process.env.NODE_ENV !== 'production') {
    // don't use __DEV__ here, it breaks storybook
    if (_devSet[type]) {
      throw new Error(
        'Attempted creating an action with an existing type key. This is almost cetainly an error.',
      );
    }
    _devSet[type] = type;
  }

  return <X extends (...args: any[]) => Z>(fn: X) => {
    const returnFn: IActionType<X> = ((...args: any[]) => ({
      ...(fn as any)(...args),
      type,
    })) as any;

    returnFn.__actionType = typePrefix + type;

    return returnFn;
  };
}

// Create normal (FSA) actions
export function makeAction<Z>(type: string) {
  return _makeActionInternal<{ payload: Z }>(type);
}

// Any plain action that doesn't conform to { type, payload, error, meta }
export function makePlainAction(type: string) {
  return _makeActionInternal(type);
}

// For normal actions not routed through redux-pack
export function isAction<T extends { payload: any }>(
  action: Action,
  actionCreator: IActionType<(...args: any[]) => T>,
): action is T & Action {
  return action.type === actionCreator.__actionType;
}
