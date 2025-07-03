/**
 * Simple example demonstrating how a hash table works.
 * 
 * This example also illustrates that many cache implementations 
 * internally use hash tables to efficiently store and retrieve data.
 */

const cache = new Map<string, any>();

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const users = [
  { id: 1, name: 'Gustavo' },
  { id: 2, name: 'Giovanna' },
];

cache.set('USERS', users);

async function getUsersRoute(withCache: boolean) {
  if (withCache) {
    return cache.get('USERS');
  }

  // Simulate slow fetch
  await sleep(1000);
  return users;
}

(async () => {
  console.time('no-cache');
  await getUsersRoute(false);
  console.timeEnd('no-cache');

  console.time('cache');
  await getUsersRoute(true);
  console.timeEnd('cache');
})();
