import data from '$lib/data.json';

/** @type {import('./$types').PageLoad} */
export function load() {
  return { jobs: data };
}
