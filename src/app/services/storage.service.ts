import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  saveItem(key: string, item: any): void {
    localStorage.setItem(key, item);
  }

  deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}
