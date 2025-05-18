// src/services/LoadingManager.js

class LoadingManager {
  constructor() {
    this.subscribers = [];
    this.loading = false;
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    callback(this.loading); // gọi lần đầu để sync
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  setLoading(isLoading) {
    this.loading = isLoading;
    this.subscribers.forEach(cb => cb(isLoading));
  }

  start() {
    this.setLoading(true);
  }

  stop() {
    this.setLoading(false);
  }

  isLoading() {
    return this.loading;
  }
}

const loadingManager = new LoadingManager();
export default loadingManager;