const BORDER_FIELDS = ["WIDTH", "HEIGHT", "BACKGROUND_COLOR"];
const BORDER_TYPES = ["String", "String", "String"];
const menuName = "base_page_mutator"
const names = ["width", "height", "background color"];
const amountOfInputs = names.length;
import { makeChecklistMutator } from '../../functions/makeChecklistMutator.js';

const menuTooltip = `Click the checkboxes to add more options.`

export const block = (Blockly: any) => {
    Blockly.Blocks['close_button'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Close Button");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
            this.setMutator(new Blockly.Mutator([]));
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.inputs_ = []
            for (let i = 0; i < amountOfInputs; i++) {
                this.inputs_.push(false)
            }
        }
    }
    const mutator = makeChecklistMutator(Blockly, names, menuName, menuTooltip, BORDER_FIELDS, BORDER_TYPES);
    Blockly.Blocks['close_button'].mutationToDom = mutator.mutationToDom;
    Blockly.Blocks['close_button'].domToMutation = mutator.domToMutation;
    Blockly.Blocks['close_button'].decompose = mutator.decompose;
    Blockly.Blocks['close_button'].compose = mutator.compose;
    Blockly.Blocks['close_button'].updateShape_ = mutator.updateShape_;
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['close_button'] = function(block: any) {
        const width = javascriptGenerator.valueToCode(block, 'WIDTH', javascriptGenerator.ORDER_ATOMIC);
        const height = javascriptGenerator.valueToCode(block, 'HEIGHT', javascriptGenerator.ORDER_ATOMIC);
        const background_color = javascriptGenerator.valueToCode(block, 'BACKGROUND_COLOR', javascriptGenerator.ORDER_ATOMIC);

        let code: string = `
            
    const close = document.createElement('button');
    close.innerText = '✕';
    close.style = \`
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
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

    close.addEventListener('mouseover', () => {
      close.style.backgroundColor = 'red';
    });

    close.addEventListener('mouseout', () => {
      close.style.backgroundColor = '#101010';
    });

    close.addEventListener('click', () => {
      box.remove();
      const icon = document.querySelector(\`img[src="\${this.icon}"]\`);
      icon.classList.add('app-icon-animation-reverse');

      setTimeout(() => {
        icon.remove();
      }, 500);
    });

    box.appendChild(close);

        `
        return code;
    }
}