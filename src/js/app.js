import GameSavingLoader from './loader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (error) {
    return Promise.reject(error);
  }
})();
