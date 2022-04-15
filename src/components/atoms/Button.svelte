<script lang="ts">
  export let button: string;
</script>

<div class="button">
  <button on:click>{button}</button>
</div>

<style>
  button {
    margin: 0;
    width: 40px;
    border-radius: 15%;
  }
  .button {
    position: relative;
    left: 15px;
  }
</style>
