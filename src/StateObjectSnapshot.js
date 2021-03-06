// @flow

import {ObjectSnapshot} from 'ObjectSnapshot';
import {State} from './State';
import {EMPTY_STRING} from 'jsz-string';

class StateObjectSnapshot extends State{
  _state: ObjectSnapshot;

  constructor(object: any) {
    super();
    this._state = new ObjectSnapshot(object);
  }

  data(keyPath: string = EMPTY_STRING) {
    return this._state.immutable(keyPath);
  }

  hasChanges() {
    return this._state.hasChanges();
  }

  update(state: any) {
    Object.assign(this._state.observable(), state);
  }

  commit() {
    this._state.commit();
  }
}

export {StateObjectSnapshot};
