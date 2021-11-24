import GameSavingLoader from '../loader';

test('should check loader correctly', async () => {
  const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  expect(await GameSavingLoader.load()).toEqual(result);
});
