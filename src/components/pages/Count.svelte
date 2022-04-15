<script lang="ts">
  import CountList from '../blocks/CountList.svelte';
</script>

<h1>Svelte Counter</h1>
<div class="highlight"><span>Title List : </span> new</div>
<div class="highlight"><span>Total :</span> 2</div>
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
