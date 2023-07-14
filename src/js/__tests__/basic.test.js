import Team from '../basic';

test('testing added one player to Team (method add, toArray)', () => {
  const myTeam = new Team();

  const player1 = {
    name: 'player1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  myTeam.add(player1);

  expect(myTeam.toArray()).toEqual([player1]);
});

test('testing added many players to Team without a double(method addAll)', () => {
  const myTeam = new Team();

  const player1 = {
    name: 'player1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const player2 = {
    name: 'player2',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const player3 = {
    name: 'player3',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  myTeam.addAll(player2, player1);
  myTeam.addAll(player3, player2);

  expect(myTeam.toArray()).toEqual([player2, player1, player3]);
});
