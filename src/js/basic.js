/* eslint-disable no-dupe-class-members */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Person already exists!');
    } else {
      this.members.add(player);
    }
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
