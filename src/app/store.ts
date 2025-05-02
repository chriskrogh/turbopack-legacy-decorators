import { action, computed, observable } from "mobx";
export class CounterStore {
  @observable
  private _counter = 0;
  
  @computed
  get counterMoreThan3() {
    return this._counter > 3;
  }

  get counter() {
    return this._counter;
  }

  @action incrementCounter() {
    this._counter += 1;
  }
}