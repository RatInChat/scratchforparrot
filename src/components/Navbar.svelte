<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function handleClick() {
      dispatch('generateCode');
    }
  </script>
  
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-title">PiplupOS</span>
    <button class="btn btn-primary" on:click={handleClick}>Generate Code</button>
  </nav>
  
  <style>
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
  
    .navbar-title {
      font-size: 1.5rem;
      color: #fff;
      font-weight: bold;
    }
  
    .btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  </style>
  