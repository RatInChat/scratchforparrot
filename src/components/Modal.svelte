<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    export let title = 'Code';
  
    const dispatch = createEventDispatcher();
  
    function handleClose() {
      dispatch('close');
    }
  </script>
  
  <div class="modal-container">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{title}</h5>
          <button type="button" class="close" on:click={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>

  <style>
    .modal-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #ffffff;
      z-index: 99999;
    }

    span {
      color: #ffffff;
    }
  
    .modal-dialog {
      background-color: #161719;
      border-radius: 0.25rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      max-width: 90vw;
      width: 60rem;
      max-height: 90vh;
      overflow-y: auto;
    }
  
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid #ccc;
    }
  
    .modal-title {
      font-size: 1.25rem;
      margin: 0;
    }
  
    .close {
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
    }
  
    .close:focus {
      outline: none;
    }
  
    .modal-body {
      padding: 1rem;
    }

    :global(code[class*="language-"]) {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      tab-size: 2;
      hyphens: none;
      overflow: auto;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      line-height: 1.5;
      background: #161719;
      color: #ffffff;
    }
  </style>
  