import GameSavingLoader from './loader';
import json from './parser';

(async () => {
  const data = await GameSavingLoader.load();
  try {
    const value = await json(data);
    return value;
  } catch {
    // eslint-disable-next-line
    return error;
  }
})();
