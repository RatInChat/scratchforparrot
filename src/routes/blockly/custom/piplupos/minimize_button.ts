const BORDER_FIELDS = ["WIDTH", "HEIGHT", "BACKGROUND_COLOR"];
const BORDER_TYPES = ["String", "String", "String"];
const menuName = "base_page_mutator"
const names = ["width", "height", "background color"];
const amountOfInputs = names.length;
import { makeChecklistMutator } from '../../functions/makeChecklistMutator.js';

const menuTooltip = `Click the checkboxes to add more options.`

export const block = (Blockly: any) => {
    Blockly.Blocks['minimize_button'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Minimize Button");
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
    Blockly.Blocks['minimize_button'].mutationToDom = mutator.mutationToDom;
    Blockly.Blocks['minimize_button'].domToMutation = mutator.domToMutation;
    Blockly.Blocks['minimize_button'].decompose = mutator.decompose;
    Blockly.Blocks['minimize_button'].compose = mutator.compose;
    Blockly.Blocks['minimize_button'].updateShape_ = mutator.updateShape_;
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['minimize_button'] = function(block: any) {
        let width = javascriptGenerator.valueToCode(block, 'WIDTH', javascriptGenerator.ORDER_ATOMIC);
        let height = javascriptGenerator.valueToCode(block, 'HEIGHT', javascriptGenerator.ORDER_ATOMIC);
        let background_color = javascriptGenerator.valueToCode(block, 'BACKGROUND_COLOR', javascriptGenerator.ORDER_ATOMIC);

        let code = `
        const minimize = document.createElement('button');
        minimize.classList.add('minimizeButtondd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
        minimize.innerText = '🗕';
        minimize.style = \`
        position: absolute !important;
        top: 0 !important;
        right: 80px !important;
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
        font-size: 18px !important;
        font-weight: bold !important;
        line-height: 1 !important;
        z-index: 10001 !important;
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        -khtml-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important; 
    \`;
        let minimized = false;
        minimize.addEventListener('mouseover', () => {
        minimize.style.backgroundColor = 'gray';
        });
        
        minimize.addEventListener('mouseout', () => {
        minimize.style.backgroundColor = '#101010';
        });

        minimize.addEventListener('click', () => {
            const icon = document.querySelector(\`img[src="\${this.icon}"]\`);
            icon.classList.remove('app-icon-animation');
            box.classList.add('minimize-animation');
            
            setTimeout(() => {
              box.style.display = 'none';
              icon.classList.add('icon-bounce-animation')
              setTimeout(() => {
                icon.classList.remove('icon-bounce-animation');
                box.classList.remove('minimize-animation');
                minimized = true;
              }
              , 500);
            }
            , 500);
          });
      
        box.appendChild(minimize);

        const icon = document.querySelector(\`img[src="\${this.icon}"]\`);
        icon.addEventListener('click', () => {
          if (!minimized) return;
          if (box.id !== \`settingsdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso\${date}\`) return;
          if (box.style.display !== 'none') return;
          const box2 = document.getElementById(box.id);
          box2.style.display = 'flex';
          box2.classList.add('maximize-animation');
          setTimeout(() => {
            icon.classList.add('icon-bounce-animation');
            box2.classList.remove('maximize-animation');
            setTimeout(() => {
              icon.classList.remove('icon-bounce-animation');
              minimized = false;
            }, 500);
          }, 500);
        });    
        `;
        return code;
    }
}