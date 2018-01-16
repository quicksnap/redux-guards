import { makeAction, makePackAction } from 'redux-guards';

// A normal action that conforms to the FSA shape (payload, error, meta...)
export const addCount = makeAction('ADD_COUNT')((amount: number) => ({
  payload: amount,
}));

/**
 * Redux Pack is an interesting middleware; it takes your action's `promise`,
 * and then ultimately dispatches an action that contains the result of that
 * proise, along with additional information, such as the original `meta`
 * object, a UUID, and separate error/start payloads. See definition of
 * `isPackAction` for more details.
 */
export const delayedCount = makePackAction('DELAYED_COUNT')(
  (amount: number, delayTimeout: number) => ({
    // meta can be used to carry information across all states of pack handler
    meta: {
      myMeta: 'abc123',
    },
    // This promise will be resolved in the reducer's `success` handler, and be
    // typed appropriately via a redux-guard
    promise: new Promise<number>(resolve => {
      setTimeout(() => resolve(amount), delayTimeout);
    }),
  }),
);
