<script>
  import Listing from '$lib/components/listing.svelte';
  import '$lib/css/main.css';
  import { filters } from '$lib/stores.js';

  export let data;

  const hasActiveFilter = (job) => {
    let tags = [job.role, job.level, ...job.languages, ...job.tools];
    return $filters.every((filter) => tags.includes(filter));
  };

  $: filteredJobs = $filters.length === 0 ? data.jobs : data.jobs.filter(hasActiveFilter);
</script>

<svelte:head>
  <title>Frontend Mentor | Job Listings</title>
  <meta
    name="description"
    content="A mock job listings page with filtering. Built with SvelteKit by Josh Javier, a frontend developer from Manila."
  />
</svelte:head>

<header></header>

<main>
  <h1 class="visually-hidden">Job listings with filtering</h1>
  <ul role="list" class="flow wrapper">
    {#each filteredJobs as job (job.id)}
      <li><Listing {job} /></li>
    {/each}
  </ul>
</main>

<style>
  :root {
    --color-primary: 180 29% 50%;
    --color-background: 180 52% 96%;
    --color-neutral-dark: 180 14% 20%;
    --color-neutral-light: 180 8% 52%;
    --color-neutral-filter-bg: 180 31% 95%;
    --shadow: 0px 4px 16px 0px hsl(var(--color-primary) / 0.25);
    --space: 24px;
  }

  header {
    height: 156px;
    margin-block-end: 32px;
    background-color: hsl(var(--color-primary));
    background-image: url('/images/bg-header-desktop.svg');
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .wrapper {
    --max-width: 1110px;
  }

  .flow {
    --flow-space: 40px;
  }
</style>
