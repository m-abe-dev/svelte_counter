<script lang="ts">
  export let title: string;
</script>

<div class="input">
  <input type="text" bind:value={title} placeholder="type title .." />
</div>

<style>
  input {
    margin: 0;
    opacity: 0.5;
  }
  .input {
    position: relative;
    right: 15px;
  }
</style>
