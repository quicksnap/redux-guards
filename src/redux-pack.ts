/// <reference path="../types/redux-pack.d.ts" />
import { Action as PackAction, GetState } from 'redux-pack';
import { IActionType, _makeActionInternal } from './index';
import { Action } from 'redux';

declare module 'redux' {
  export interface Dispatch<S> {
    <T, M>(action: { meta?: M; promise: Promise<T> }): Promise<
      T | { error: any }
    >;
  }
}

export function isPackAction<IAppState, T, M>(
  action: Action,
  actionCreator: IActionType<
    (...args: any[]) => { meta?: M; promise: Promise<T> }
  >,
): action is PackAction<IAppState, T, {}, {}, M> {
  return `PACK_${action.type}` === actionCreator.__actionType;
}

export function makePackAction<T>(type: string) {
  return _makeActionInternal<{
    meta?: { [key: string]: any };
    promise: Promise<T>;
  }>(type, 'PACK_');
}
