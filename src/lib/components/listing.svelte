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
    <div class="col">
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
    </div>
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
    line-height: normal;
  }

  .logo {
    position: absolute;
    translate: 0 -50%;
    left: var(--space);
    --space: clamp(1.5rem, 1.1479rem + 1.5023vw, 2.5rem);
    z-index: 1;
  }

  .card {
    position: relative;
    overflow: hidden;
    --space: 32px clamp(1.5rem, 1.1479rem + 1.5023vw, 2.5rem)
      clamp(1.5rem, 1.3239rem + 0.7512vw, 2rem);
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
    font-size: clamp(0.9375rem, 0.8715rem + 0.2817vw, 1.125rem); /* 15 -> 18 */
  }

  .company + :global(*) > :global(*) {
    margin-inline-start: 23px;
    margin-inline-start: clamp(0.9375rem, 1.6136rem - 0.7512vw, 1.4375rem); /* 23 -> 15 */
  }

  .position {
    font-size: clamp(0.9375rem, 0.8055rem + 0.5634vw, 1.3125rem); /* 15 -> 21 */
    margin-block-start: clamp(0.75rem, 0.919rem + -0.1878vw, 0.875rem); /* 14 -> 12 */
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
    gap: clamp(0.4375rem, 0.2394rem + 0.8451vw, 1rem); /* 7 -> 16 */
    margin-block-start: clamp(0.8125rem, 1.235rem - 0.4695vw, 1.125rem); /* 18 -> 13 */
    font-size: clamp(1rem, 0.956rem + 0.1878vw, 1.125rem); /* 16 -> 18 */
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

  @media (min-width: 742px) {
    article {
      padding-top: 0;
    }

    .logo {
      top: 50%;
      width: 88px;
      height: 88px;
    }

    .card {
      padding-inline-start: 152px;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }

    .col {
      flex-basis: max-content;
      flex-shrink: 0;
      /* In case the tags become 3 rows, adjust the content so it's still centered vertically */
      display: flex;
      flex-direction: column;
      margin-block: auto;
    }

    hr {
      display: none;
    }

    .cluster {
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
