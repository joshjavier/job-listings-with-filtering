<script>
  import FilterTablet from './filter-tablet.svelte';
  import Pill from './pill.svelte';

  export let job = {
    company: 'Photosnap',
    logo: '/images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  };
  let tags = [job.role, job.level, ...job.languages, ...job.tools];
</script>

<article>
  <img class="logo" src={job.logo} alt="" width="48" height="48" />
  <div class="card">
    {#if job.featured}
      <div class="strip"></div>
    {/if}
    <div class="row">
      <p class="company">{job.company}</p>
      {#if job.new}
        <Pill --bg-color="var(--color-primary)">New!</Pill>
      {/if}
      {#if job.featured}
        <Pill>Featured</Pill>
      {/if}
    </div>
    <h3 class="position"><a href="#">{job.position}</a></h3>
    <p class="row details">
      <span>{job.postedAt}</span>
      <span>&bull;</span>
      <span>{job.contract}</span>
      <span>&bull;</span>
      <span>{job.location}</span>
    </p>
    <hr />
    <ul role="list" class="cluster">
      {#each tags as tag (tag)}
        <li><FilterTablet value={tag} /></li>
      {/each}
    </ul>
  </div>
</article>

<style>
  article {
    position: relative;
    padding-top: 24px;
    font-size: 15px;
  }

  .logo {
    position: absolute;
    translate: 0 -50%;
    left: var(--space);
    z-index: 1;
  }

  .card {
    padding-top: 32px;
    position: relative;
    overflow: hidden;
  }

  .strip {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: hsl(var(--color-primary));
  }

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .row:has(.company) {
    min-height: 24px;
  }

  .company {
    margin-block-start: 0;
    color: hsl(var(--color-primary));
    font-weight: 700;
    line-height: normal;
  }

  .company + :global(*) > :global(*) {
    margin-inline-start: 23px;
  }

  .position {
    font-size: 15px;
    margin-block-start: 14px;
  }

  .position > a {
    color: inherit;
    text-decoration: none;
  }

  .position > a:hover {
    color: hsl(var(--color-primary));
  }

  .details {
    color: hsl(var(--color-neutral-light));
    gap: 7px;
    margin-block-start: 18px;
  }

  hr {
    border: none;
    border-top: 1px solid hsl(var(--color-neutral-light));
    margin-block-start: 20px;
    margin-block-end: 16px;
    opacity: 0.5;
  }

  [role='list'] {
    margin-block: 0;
    padding-inline-start: 0;
  }

  .cluster {
    --v-gutter: 18px;
    --h-gutter: 16px;
  }
</style>
