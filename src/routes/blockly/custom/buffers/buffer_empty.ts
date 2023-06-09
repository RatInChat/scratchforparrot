export const block = (Blockly: any) => {
    Blockly.Blocks['buffer_empty'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("create buffer full of");
            this.appendValueInput("value")
                .setCheck("Number");
            this.appendDummyInput()
                .appendField("with a length of");
            this.appendValueInput("length")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setOutput(true, "Buffer");
            this.setColour('#FF6680');
            this.setTooltip("");
            this.setHelpUrl("");
            this.setOutput(true, null);
        }
    }
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['buffer_empty'] = function (block: any) {
        let value_value = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_ATOMIC);
        let value_length = javascriptGenerator.valueToCode(block, 'length', javascriptGenerator.ORDER_ATOMIC);

        const code = `Buffer.alloc(${value_length}, ${value_value})`;
        return [code, javascriptGenerator.ORDER_NONE];
    }
};