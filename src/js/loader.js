import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return new GameSaving(value);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
