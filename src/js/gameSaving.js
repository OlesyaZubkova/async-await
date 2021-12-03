export default class GameSaving {
  constructor(save) {
    const data = JSON.parse(save);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}
