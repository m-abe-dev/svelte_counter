<script lang="ts">
  import { count } from '../../stores/store';
  import CountList from '../blocks/CountList.svelte';

  // $: sumCount = count ;
</script>

<h1>Svelte Counter</h1>
<div class="highlight"><span>Title List : </span> new</div>
<div class="highlight"><span>Total : </span>{$count}</div>
<CountList />

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
