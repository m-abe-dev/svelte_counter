import { writable } from 'svelte/store';

export interface items {
  title: string;
  count: number;
}

export let items = writable<items[]>([{ title: 'new', count: 0 }]);
