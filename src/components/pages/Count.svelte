<script lang="ts">
  import { items } from '../../stores/count';
  import CountList from '../blocks/CountList.svelte';

  $: titlelists = $items.map((item) => item.title);
  $: sum = $items.reduce((sum, current) => sum + current.count, 0);
</script>

<h1>Svelte Counter</h1>
<div class="highlight"><span>Title List : </span>{titlelists}</div>
<div class="highlight"><span>Total : </span>{sum < 0 ? 0 : sum}</div>
{#each $items as item, index}
  <CountList bind:count={item.count} bind:text={item.title} {index} />
{/each}

<style>
  h1 {
    font-size: 80px;
  }

  span {
    font-weight: bold;
  }
  .highlight {
    color: red;
    font-size: 20px;
    margin-bottom: 10px;
  }
</style>
