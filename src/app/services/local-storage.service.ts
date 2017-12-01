import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  get (key: string, defaultValue = null): any {
    let stored = localStorage.getItem(key);
    try {
      stored = JSON.parse(stored);
    } catch (error) {
      stored = null;
    }
    if (defaultValue && stored === null) {
      stored = defaultValue;
    }
    return stored;
  }

  update(key: string, value: any): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  clear(key: string): void {
    localStorage.removeItem(key);
  }
}
