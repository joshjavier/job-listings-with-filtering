import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<string[]>} */
export const filters = writable([]);
