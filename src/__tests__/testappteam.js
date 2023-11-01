import Team from '../appteam';

test('Возможность добавления персонажа в Set', () => {
  const testAddSet = new Set();
  const expected = testAddSet.add('Silvanna');

  const team = new Team();
  team.add('Silvanna');
  const received = team.members;

  expect(received).toEqual(expected);
});

test('Невозможно добавить повторно уже существующего персонажа', () => {
  function testError() {
    const test = new Team();
    test.addAll('Silvanna', 'Tor');
    test.add('Silvanna');
  }

  expect(testError).toThrow('Невозможно добавить повторно уже существующего персонажа');
});

test('возможность добавлять несколько персонажей в Set Team', () => {
  const testAddAllSet = new Set();
  const expected = testAddAllSet.add('Tanos').add('Tor');

  const team = new Team();
  team.addAll('Tanos', 'Tor');
  const received = team.members;

  expect(received).toEqual(expected);
});

test('должна ковертировать Set в массив', () => {
  const testArrSet = new Set();
  const expected = Array.from(testArrSet);

  const team = new Team();
  team.toArray();
  const received = team.members;

  expect(received).toEqual(expected);
});
