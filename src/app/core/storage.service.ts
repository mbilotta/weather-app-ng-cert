export class StorageService {

  constructor(private readonly storageKey: string) { }

  get count() {
    return this.getAll().length;
  }

  add(item: string): boolean {
    let items = this.getAll();
    let index = items.findIndex(storedItem => storedItem === item);
    if (index == -1) {
      items.push(item);
      this._setAll(items);
    }
    return index == -1;
  }

  remove(item: string): boolean {
    let items = this.getAll();
    let index = items.findIndex(storedItem => storedItem === item);
    if (index != -1) {
      items.splice(index, 1);
      this._setAll(items);
    }
    return index != -1;
  }

  has(item: string): boolean {
    return this.getAll().findIndex(storedItem => storedItem === item) != -1;
  }

  getAll(): string[] {
    let storageValue = localStorage.getItem(this.storageKey);
    return storageValue ? JSON.parse(storageValue) : [];
  }

  private _setAll(items: string[]) {
    let storageValue = JSON.stringify(items);
    localStorage.setItem(this.storageKey, storageValue);
  }
}
