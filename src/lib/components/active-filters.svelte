<script>
  import { filters } from '$lib/stores';
  import FilterTablet from './filter-tablet.svelte';
</script>

{#if $filters.length > 0}
  <section id="af" aria-labelledby="label-af" class="card">
    <h2 id="label-af" class="visually-hidden">Active filters</h2>
    <ul role="list" class="cluster">
      {#each $filters as filter (filter)}
        <li><FilterTablet variant="icon" value={filter} /></li>
      {/each}
    </ul>
    <button on:click={() => ($filters = [])}>Clear</button>
  </section>
{/if}

<style>
  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
    --space: 20px clamp(1.25rem, 0.8099rem + 1.8779vw, 2.5rem);
  }

  [role='list'] {
    padding-inline-start: 0;
    margin-block: 0;
  }

  .cluster {
    --v-gutter: 17px;
    --h-gutter: 16px;
  }

  button {
    margin-inline-start: auto;
    border: none;
    padding: 0;
    color: hsl(var(--color-neutral-light));
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    font-size: 500;
    letter-spacing: 0.16px;
  }

  button:hover {
    color: hsl(var(--color-primary));
    font-weight: 700;
    text-decoration: underline;
  }
</style>
