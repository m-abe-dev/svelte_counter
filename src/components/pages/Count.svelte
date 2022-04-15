<script lang="ts">
  import CountList from '../blocks/CountList.svelte';
</script>

<h1>Svelte Counter</h1>
<p class="highlight">Title List: new</p>
<p class="highlight">Total : 2</p>
<CountList />

<style>
  h1 {
    font-size: 80px;
  }
  .highlight {
    color: red;
  }
</style>
