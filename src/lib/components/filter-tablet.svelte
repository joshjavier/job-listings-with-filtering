<script>
  import { filters } from '$lib/stores.js';

  export let value = '';
  $: active = $filters.includes(value);

  /** @param {MouseEvent} event */
  function onClick(event) {
    if (!event.target) return;

    /** @type {string} */
    let tag = event.target.textContent;
    filters.update((filters) => {
      if (filters.includes(tag)) {
        return filters.filter((t) => t !== tag);
      } else {
        return [...filters, tag];
      }
    });
  }
</script>

<button aria-pressed={active} on:click={onClick}>{value}</button>

<style>
  button {
    --text-color: hsl(var(--color-primary));
    --bg-color: hsl(var(--color-neutral-filter-bg));

    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.16px;
    color: var(--text-color);
    background-color: var(--bg-color);
    padding: 10px 8px 7px;
    line-height: normal;
    cursor: pointer;
  }

  button:hover,
  button[aria-pressed='true'] {
    --text-color: #fff;
    --bg-color: hsl(var(--color-primary));
  }

  button:active {
    scale: 0.95;
  }
</style>
