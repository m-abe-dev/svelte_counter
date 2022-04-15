<script lang="ts">
  import { count } from '../../stores/store';
  import Input from '../atoms/Input.svelte';
  import Button from '../atoms/Button.svelte';
  import Add from '../atoms/Add.svelte';
</script>

<div class="wrap">
  <Input />
  <span class="count">{$count < 0 ? 0 : $count}</span>
  <Button on:click={count.increment} button={'+'} />
  <Button on:click={count.decrement} button={'-'} />
  <Button on:click={count.reset} button={'0'} />
</div>
<Add text={'ADD NEW COUNTER'} />

<style>
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px;
    box-shadow: inset;
    padding: 50;
    margin-bottom: 20px;
  }
  .count {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 30px;
  }
</style>
