export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    this.members.add(player);
  }

  addAll(...players) {
    players.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
