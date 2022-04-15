<script lang="ts">
  import Count from './components/pages/Count.svelte';
</script>

<main>
  <Count />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    background-color: pink;
    height: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
