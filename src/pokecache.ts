export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval?: number) {
    this.#interval = interval ?? 30000;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: val,
    };

    this.#cache.set(key, entry);
  }

  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (entry) {
      return entry?.val;
    } else {
      return undefined;
    }
  }

  #reap(): void {
    for (const [key, cacheEntry] of this.#cache) {
      const age = Date.now() - cacheEntry.createdAt;
      if (age > this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop(): void {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
