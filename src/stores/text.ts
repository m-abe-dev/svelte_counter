import { writable } from 'svelte/store';

function createText() {
  const { subscribe, set } = writable('');

  return {
    subscribe,
    setText: () => set(''),
  };
}

export const text = createText();
