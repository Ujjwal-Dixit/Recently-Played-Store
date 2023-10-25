const assert = require('chai').assert;
const RecentlyPlayedStore = require('./script.js');

describe('RecentlyPlayedStore', () => {
  it('should add and retrieve recently played songs', () => {
    const capacity = 3;
    const store = new RecentlyPlayedStore(capacity);

    store.playSong("user1", "S1");
    store.playSong("user1", "S2");
    store.playSong("user1", "S3");

    const user1Playlist = store.getRecentlyPlayed("user1");
    assert.deepEqual(user1Playlist, ["S3", "S2", "S1"]);
  });

  it('should handle users without playlists', () => {
    const capacity = 3;
    const store = new RecentlyPlayedStore(capacity);

    const user2Playlist = store.getRecentlyPlayed("user2");
    assert.deepEqual(user2Playlist, []);
  });
});
