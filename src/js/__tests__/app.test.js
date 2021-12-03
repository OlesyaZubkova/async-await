import GameSavingLoader from '../loader';
import GameSaving from '../gameSaving';

test('should check loader correctly', async () => {
  const character = new GameSaving('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');

  await GameSavingLoader.load().then((result) => {
    expect(result).toEqual(character);
  });
});
