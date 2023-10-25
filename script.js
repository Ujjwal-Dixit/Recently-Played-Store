class RecentlyPlayedStore {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = new Map();
  }

  playSong(user, song) {
    if (!this.store.has(user)) {
      this.store.set(user, []);
    }

    const userPlaylist = this.store.get(user);

    // Check if the song is already in the playlist
    const songIndex = userPlaylist.indexOf(song);

    if (songIndex !== -1) {
      // If the song is already in the playlist, move it to the most recently played position
      userPlaylist.splice(songIndex, 1);
      userPlaylist.unshift(song);
    } else {
      // If the song is not in the playlist, add it to the front
      userPlaylist.unshift(song);

      // If the playlist exceeds capacity, remove the least recently played song
      if (userPlaylist.length > this.capacity) {
        userPlaylist.pop();
      }
    }
  }

  getRecentlyPlayed(user) {
    if (!this.store.has(user)) {
      return [];
    }

    return this.store.get(user);
  }
}

// Example
const capacity = 3;
const store = new RecentlyPlayedStore(capacity);

store.playSong("user1", "S1");
store.playSong("user1", "S2");
store.playSong("user1", "S3");

console.log(store.getRecentlyPlayed("user1"));

module.exports = RecentlyPlayedStore;