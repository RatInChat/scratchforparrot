const BORDER_FIELDS = ["WIDTH", "HEIGHT", "BACKGROUND_COLOR"];
const BORDER_TYPES = ["String", "String", "String"];
const menuName = "base_page_mutator"
const names = ["width", "height", "background color"];
const amountOfInputs = names.length;
import { makeChecklistMutator } from '../../functions/makeChecklistMutator.js';

const menuTooltip = `Click the checkboxes to add more options.`

export const block = (Blockly: any) => {
    Blockly.Blocks['restore_maximize'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Restore/Maximize");
            this.setColour(230);
            this.setMutator(new Blockly.Mutator([]));
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.inputs_ = []
            for (let i = 0; i < amountOfInputs; i++) {
                this.inputs_.push(false)
            }
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }
    const mutator = makeChecklistMutator(Blockly, names, menuName, menuTooltip, BORDER_FIELDS, BORDER_TYPES);
    Blockly.Blocks['restore_maximize'].mutationToDom = mutator.mutationToDom;
    Blockly.Blocks['restore_maximize'].domToMutation = mutator.domToMutation;
    Blockly.Blocks['restore_maximize'].decompose = mutator.decompose;
    Blockly.Blocks['restore_maximize'].compose = mutator.compose;
    Blockly.Blocks['restore_maximize'].updateShape_ = mutator.updateShape_;
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['restore_maximize'] = function(block: any) {
        let width = javascriptGenerator.valueToCode(block, 'WIDTH', javascriptGenerator.ORDER_ATOMIC);
        let height = javascriptGenerator.valueToCode(block, 'HEIGHT', javascriptGenerator.ORDER_ATOMIC);
        let background_color = javascriptGenerator.valueToCode(block, 'BACKGROUND_COLOR', javascriptGenerator.ORDER_ATOMIC);

        let code = `
    const restore_maximize = document.createElement('button');

    restore_maximize.style = \`
      position: absolute !important;
      top: 0 !important;
      right: 40px !important;
      background-color: ${background_color ? background_color.replace(/['"]+/g, '') : 'transparent'} !important;
      color: #FFFFFF !important;
      border: none !important;
      border-radius: 5px !important;
      padding: 5px !important;
      margin: 5px !important;
      height: ${height ? height.replace(/['"]+/g, '') : ''} !important;
      width: ${width ? width.replace(/['"]+/g, '') : '40px'} !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      z-index: 10001 !important;
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      -khtml-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    \`;
    restore_maximize.innerText = '🗗';
    let restored = false;
    
    restore_maximize.addEventListener('mouseover', () => {
      restore_maximize.style.backgroundColor = 'gray';
    });

    restore_maximize.addEventListener('mouseout', () => {
      restore_maximize.style.backgroundColor = '#101010';
    });

    let old_pos = {
        x: 0,
        y: 0
      };
  
      let old_size = {
        width: \`50vw\`,
        height: \`calc(50vh - 55px)\`
      };
  
      const borderWidth = 1; // 1 pixel border width
      const borderColor = 'white';
      restore_maximize.addEventListener('click', () => {
        if (restore_maximize.innerText == '🗗') {
          if (old_pos.x == 0 && old_pos.y == 0) { old_pos.x = box.offsetLeft; old_pos.y = box.offsetTop; }
          restore_maximize.innerText = '🗖';
          box.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out';
          box.style.width = old_size.width;
          box.style.height = old_size.height;
          box.style.left = \`\${old_pos.x}px\`;
          box.style.top = \`\${old_pos.y}px\`;
          restored = true;
          box.style.border = \`\${borderWidth}px solid \${borderColor}\`;
        } else {
          restore_maximize.innerText = '🗗';
          box.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out';
          old_pos.x = box.offsetLeft;
          old_pos.y = box.offsetTop;
          old_size.width = box.style.width;
          old_size.height = box.style.height;
          box.style.width = '100vw';
          box.style.height = \`calc(100vh - 55px)\`;
          box.style.left = '\${mainframe.offsetLeft}px';
          box.style.top = '\${mainframe.offsetTop}px';
          restored = false;
          box.style.border = 'none';
        }
      
        // Reset transition after animation completes
        setTimeout(() => {
          box.style.transition = 'none';
        }, 300);
      });

    box.appendChild(restore_maximize);
        `;
        return code;
    }
}