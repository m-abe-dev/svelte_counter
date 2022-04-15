<script lang="ts">
  import { count } from '../../stores/store';
  import Input from '../atoms/Input.svelte';
  import Button from '../atoms/Button.svelte';
  import Add from '../atoms/Add.svelte';
</script>

<div class="color">
  <span class="close" />
  <div class="wrap">
    <Input />
    <span class="count">{$count < 0 ? 0 : $count}</span>
    <Button on:click={count.increment} button={'+'} />
    <Button on:click={count.decrement} button={'-'} />
    <Button on:click={count.reset} button={'0'} />
  </div>
  <Add text={'ADD NEW COUNTER'} />
</div>

<style>
  .color {
    background-color: aliceblue;
    padding: 10px 10px 30px 10px;
    margin: 10px 400px;
    border-radius: 10px;
  }

  .close {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    opacity: 0.6;
  }

  .close:hover {
    opacity: 0.3;
  }

  .close::before,
  .close::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1750%;
    width: 2px;
    height: 20px;
    background: #333;
  }

  .close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px;
    box-shadow: inset;
    margin-bottom: 20px;
  }
  .count {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 30px;
  }
</style>
