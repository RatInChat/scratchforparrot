const BORDER_FIELDS = ["WIDTH", "HEIGHT", "BACKGROUND_COLOR"];
const BORDER_TYPES = ["String", "String", "String"];
const menuName = "base_page_mutator"
const names = ["width", "height", "background color"];
const amountOfInputs = names.length;
import { makeChecklistMutator } from '../../functions/makeChecklistMutator.js';

const menuTooltip = `Click the checkboxes to add more options.`

export const block = async function block(Blockly: any) {
    Blockly.Blocks['create_base_page'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Create Base Page");
            this.setColour(230);
        this.setTooltip("Create Base Page");
        this.setHelpUrl("");
        this.setMutator(new Blockly.Mutator([]));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.inputs_ = []
        for (let i = 0; i < amountOfInputs; i++) {
            this.inputs_.push(false)
        }
    }
    };
    const mutator = makeChecklistMutator(Blockly, names, menuName, menuTooltip, BORDER_FIELDS, BORDER_TYPES);
    Blockly.Blocks['create_base_page'].mutationToDom = mutator.mutationToDom;
    Blockly.Blocks['create_base_page'].domToMutation = mutator.domToMutation;
    Blockly.Blocks['create_base_page'].decompose = mutator.decompose;
    Blockly.Blocks['create_base_page'].compose = mutator.compose;
    Blockly.Blocks['create_base_page'].updateShape_ = mutator.updateShape_;
}

export const generator = async function generator(javascriptGenerator: any) {
    javascriptGenerator['create_base_page'] = function(block: any) {
        var width = javascriptGenerator.valueToCode(block, 'WIDTH', javascriptGenerator.ORDER_ATOMIC);
        var height = javascriptGenerator.valueToCode(block, 'HEIGHT', javascriptGenerator.ORDER_ATOMIC);
        var background_color = javascriptGenerator.valueToCode(block, 'BACKGROUND_COLOR', javascriptGenerator.ORDER_ATOMIC);

        var code: string = `
                let date = Date.now();
                const rect = mainframe.getBoundingClientRect();
                const topOffset = rect.top + window.scrollY;
                const box = document.createElement('div');
                box.id = \`\${this.app_name ? this.app_name : 'app'}dd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso\${date}\`;
                box.classList.add('windowdd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso');
                box.style = \`
                    width: ${width ? width.replace(/['"]+/g, '') : '100vw'};
                    height: ${height ? height.replace(/['"]+/g, '') : 'calc(100vh - 55px)'};
                    top: \${topOffset}px;
                    position: fixed;
                    background-color: ${background_color ? background_color.replace(/['"]+/g, '') : '#101010'};
                    border-radius: 5px;
                    z-index: 10000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    max-width: \${mainframe.offsetWidth}px;
                    max-height: \${mainframe.offsetHeight - document.querySelector('#taskbardd1683592387221_1683592387222_32830ufdskjhafdisa8y839yhfidso').offsetHeight - 1}px;
                    bottom: 0;
                \`;
                mainframe.appendChild(box);
        `
        return code;
    };
}
