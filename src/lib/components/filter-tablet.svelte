<script>
  import IconRemove from '$lib/icons/icon-remove.svelte';
  import { filters } from '$lib/stores.js';

  export let value = '';
  export let variant = 'basic';
  $: active = $filters.includes(value);

  function toggle() {
    filters.update((filters) => {
      if (filters.includes(value)) {
        return filters.filter((tag) => tag !== value);
      } else {
        return [...filters, value];
      }
    });
  }
</script>

{#if variant === 'basic'}
  <button aria-pressed={active} on:click={toggle}>{value}</button>
{:else}
  <button data-icon="remove" on:click={toggle}>
    <span class="visually-hidden">Deselect </span>
    <span class="text">{value}</span>
    <span class="icon"><IconRemove /></span>
  </button>
{/if}

<style>
  button {
    --text-color: hsl(var(--color-primary));
    --bg-color: hsl(var(--color-neutral-filter-bg));
    --rounded: 5px;

    border: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.16px;
    color: var(--text-color);
    background-color: var(--bg-color);
    line-height: normal;
    cursor: pointer;
    border-radius: var(--rounded);
  }

  button:not([data-icon]) {
    padding: 10px 8px 7px;
  }

  button[data-icon] {
    display: flex;
    align-items: center;
    padding: 0;
  }

  button[data-icon] > .text {
    padding: 9px 8px 6px;
  }

  button[data-icon] > .icon {
    padding: 6px;
    display: flex;
    color: #fff;
    background-color: hsl(var(--color-primary));
    border-top-right-radius: var(--rounded);
    border-bottom-right-radius: var(--rounded);
  }

  button[data-icon]:hover > .icon {
    background-color: hsl(var(--color-neutral-dark));
  }

  button:not([data-icon]):hover,
  button:not([data-icon])[aria-pressed='true'] {
    --text-color: #fff;
    --bg-color: hsl(var(--color-primary));
  }

  button:active {
    scale: 0.95;
  }
</style>
