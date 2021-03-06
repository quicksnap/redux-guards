// FORKED by quicksnap to improve typings for handler actions

// prettier-ignore
declare module 'redux-pack' {
  // Type definitions for redux-pack 0.1
  // Project: https://github.com/lelandrichardson/redux-pack
  // Definitions by: tansongyang <https://github.com/tansongyang>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
  // TypeScript Version: 2.4
  import { Action as ReduxAction, Middleware, Reducer } from 'redux';

  export const KEY: {
    readonly LIFECYCLE: 'redux-pack/LIFECYCLE';
    readonly TRANSACTION: 'redux-pack/TRANSACTION';
  };

  export const LIFECYCLE: {
    readonly START: 'start';
    readonly SUCCESS: 'success';
    readonly FAILURE: 'failure';
  };
  export type LIFECYCLEValues = 'start' | 'succes' | 'failure';

  export const middleware: Middleware;

  // MetaPayload differs from ActionMeta in that it is the object that the reducers
  // receive, instead of what is dispatched
  type MetaPayload<M> = M & {
    ['redux-pack/LIFECYCLE']?: LIFECYCLEValues;
    ['redux-pack/TRANSACTION']?: string;
  };

  // Incomplete typing
  type PackActionPayload<Payload, M> = ReduxAction & {
    payload: Payload;
    meta: MetaPayload<M>;
  };

  export type handlerReducer<S, A> = (state: S, action: A) => S;
  export interface Handlers<S, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload> {
    start?: handlerReducer<S, PackActionPayload<TStartPayload, TMetaPayload>>;
    finish?: handlerReducer<S, ReduxAction>;
    failure?: handlerReducer<S, PackActionPayload<TErrorPayload, TMetaPayload>>;
    success?: handlerReducer<S, PackActionPayload<TSuccessPayload, TMetaPayload>>;
    always?: handlerReducer<S, ReduxAction>;
  }

  export type GetState<S> = () => S;
  export interface ActionMeta<TFullState = {}, TSuccessPayload = {}, TErrorPayload = {}, TStartPayload = {}> {
    startPayload?: TStartPayload;
    onStart?(payload: TStartPayload, getState: GetState<TFullState>): void;
    onFinish?(resolved: boolean, getState: GetState<TFullState>): void;
    onSuccess?(response: TSuccessPayload, getState: GetState<TFullState>): void;
    onFailure?(error: TErrorPayload, getState: GetState<TFullState>): void;
    ['redux-pack/LIFECYCLE']?: LIFECYCLEValues;
    ['redux-pack/TRANSACTION']?: string;
  }

  export type PackError = { error: boolean; payload: any };
  export interface Action< TFullState = {}, TSuccessPayload = {}, TErrorPayload = PackError, TStartPayload = {}, TMetaPayload = {}> extends ReduxAction {
    promise?: Promise<TSuccessPayload>;
    payload?: TSuccessPayload | TErrorPayload | TStartPayload;
    meta?: ActionMeta<TFullState, TSuccessPayload, TErrorPayload, TStartPayload>;
  }

  export function handle<TState,TSuccessPayload, TErrorPayload, TStartPayload, TFullState, TMetaPayload>(
    state: TState,
    action: Action<TFullState, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload>,
    handlers: Handlers<TState, TSuccessPayload, TErrorPayload, TStartPayload, TMetaPayload>,
  ): TState;
}
