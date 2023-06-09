<script lang="ts">
  import { onMount } from 'svelte';
  import Blockly from 'blockly';
  import { javascriptGenerator } from 'blockly/javascript';
  import Toolbox from './blockly/toolbox.js';
  import Theme from '@blockly/theme-dark';
  import * as blockGetter from './blockly/blockGetter.js';
  import Navbar from '../components/Navbar.svelte';
  import Modal from '../components/Modal.svelte';
  import Prism from 'prismjs';
  import Swal from 'sweetalert2/dist/sweetalert2.js'
  import 'sweetalert2/src/sweetalert2.scss'
  import {Backpack} from '@blockly/workspace-backpack';
  import {CrossTabCopyPaste} from '@blockly/plugin-cross-tab-copy-paste';

  let codeVisible = false;
  let code = '';

  onMount(async () => {
    const toolbox = Toolbox();

    const blocklyDiv: any = document.getElementById('blocklyDiv');

    blockGetter.getBlocks(Blockly);

    const workspace = Blockly.inject(blocklyDiv, {
      toolbox: toolbox,
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true,
      },
      renderer: 'zelos',
      trashcan: true,
      zoom: {
            controls: true,
            startScale: 0.9,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        },
      move: {
        scrollbars: {
          horizontal: true,
          vertical: true,
        },
        drag: true,
        wheel: false,
      },
      collapse: true,
      theme: Theme,
    });
    
    const backpack = new Backpack(workspace);
    backpack.init();
    blockGetter.getJavascript(javascriptGenerator);
    const options = {
      contextMenu: true,
      shortcut: true,
    };
    const plugin = new CrossTabCopyPaste();
    plugin.init(options);

    const savedBlocks: any = localStorage.getItem('savedBlocks');
    const state = JSON.parse(savedBlocks);
    if (state) { 
      Swal.fire({
        title: 'A save from a project has been found!',
        text: "Do you want to load it?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Load',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        reverseButtons: false
      }).then((result: any) => {
        if (result.isConfirmed) {
          let timerInterval: any;
          Swal.fire({
            toast: true,
            title: 'Your save has been loaded!',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval)
            }
          })
          Blockly.serialization.workspaces.load(state, workspace);
        }
      })
    }
    
    const realTimeView: any = document.getElementById('realTimeView');
    const initialRealTimeViewContent = realTimeView.innerHTML;

    function updateCode() {
      const jsCode = javascriptGenerator.workspaceToCode(workspace);
      code = `
            ${jsCode}
      `;
    }

    workspace.addChangeListener(updateCode);

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 's') {
      const state = Blockly.serialization.workspaces.save(workspace);
      const stateString = JSON.stringify(state);
      localStorage.setItem('savedBlocks', stateString);
      
      realTimeView.innerHTML = initialRealTimeViewContent;

      e.preventDefault();
      let module: any = { exports: {} };
      try {
        const mainframe: any = document.getElementById('mainframe');
        eval(code);
        if (!module.exports.icon) return;
        const icon = document.createElement('img');
        icon.src = module.exports.icon;
        icon.style.width = '40px';
        icon.style.height = '40px';
        icon.style.borderRadius = '50%';
        icon.style.margin = '0 10px';
        icon.style.cursor = 'pointer';
        icon.classList.add('app-icon-animation');

        const taskbar: any = document.getElementById('taskbardd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
        taskbar.appendChild(icon);
        if (!module.exports.execute) return;
        module.exports.execute(mainframe);
      } catch (e: any) {
        if (e.message.includes('Unexpected token')) return;
        console.error(e);
      }
      }
    });
  });

  function toggleCode() {
    codeVisible = !codeVisible;
  }
</script>

<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-tomorrow.css" rel="stylesheet" />
</svelte:head>

<Navbar on:generateCode={toggleCode} />
<div class="elements">
  <div id="blocklyDiv"></div>
  <div id="realTimeView">
    <div id="mainframe" class="active">
      <div id="taskbardd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso">
        <img id="buttondd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso" src="data:image/webp;base64,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" alt="start" />
      </div>
    </div>
  </div>
</div>

{#if codeVisible}
  <Modal on:close={toggleCode} title="Generated Code">
    <pre class="code dark-theme"><code class="language-javascript">
      {@html Prism.highlight(code, Prism.languages.javascript)}
    </code></pre>
  </Modal>
{/if}

<style>
  :global(body) {
    background-color: #161719;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .elements {
    display: flex;
    height: 100vh;
  }
  #blocklyDiv {
    height: calc(100vh - 70px);
    width: 70%;
  }
  #realTimeView {
    height: calc(100vh - 90px);
    width: 30%;
    background-color: #161719;
    color: #d7dae0;
    padding: 1rem;
    right: 0;
  }
  .code {
    background-color: #161719;
    padding: 1rem;
    margin-top: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: #d7dae0;
  }

  .dark-theme {
    background-color: #161719 !important;
  }
  :global(.blocklyToolboxContents) {
    padding: 0.3em;
  }
  /* Adds space between the categories, rounds the corners and adds space around the label. */
  :global(.blocklyTreeRow) {
    padding: 3px;
    margin-bottom: 0.5em;
    border-radius: 4px;
  }
    #mainframe.active {
      background-color: rgb(3, 3, 3);
      position: absolute;
      width: 31%;
      left: 69%;
      height: calc(100vh - 70px);
      top: 70px;
      background-image: url("https://c4.wallpaperflare.com/wallpaper/681/554/339/abstract-planet-space-purple-wallpaper-preview.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-size: 100% 100%;
      background-position: center;
    }
    #taskbardd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55px;
    background-color: rgba(16, 16, 16, 0.9);
    color: white;
    font-size: 20px;
    font-family: Segoe UI, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.5);
    z-index: 9999;
    border-top: 1px solid gray;
  }
  #buttondd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  @keyframes appIconAnimation {
    0% { transform: scale(0.2); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  :global(.app-icon-animation) {
    animation: appIconAnimation 0.5s forwards;
  }

  @keyframes appIconAnimationReverse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.2); opacity: 0; }
  }

  :global(.app-icon-animation-reverse) {
    animation: appIconAnimationReverse 0.5s forwards;
  }
  
  @keyframes minimizeAnimation {
    0% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    70% {
      transform: scale(0.8) translateY(10%);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, 100%) scale(0.2);
      opacity: 0;
    }
  }
  
  @keyframes iconBounceAnimation {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  :global(.icon-bounce-animation) {
    animation: iconBounceAnimation 0.5s forwards;
  }

  :global(.minimize-animation) {
    animation: minimizeAnimation 0.5s forwards;
  }

  @keyframes maximizeAnimation {
    0% {
      transform: scale(0.2) translate(-50%, 100%);
      opacity: 0;
    }
    70% {
      transform: scale(0.8) translateY(10%);
      opacity: 0.7;
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }

  :global(.maximize-animation) {
    animation: maximizeAnimation 0.5s forwards;
  }
</style>
