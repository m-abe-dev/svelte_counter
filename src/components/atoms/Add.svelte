<script lang="ts">
  export let text: string;
</script>

<div class="button">
  <button on:click>{text}</button>
</div>

<style>
  button {
    margin: 0;
    width: 350px;
    background-color: bisque;
  }
  button:hover {
    opacity: 0.7;
  }
</style>
