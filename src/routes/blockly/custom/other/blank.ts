export const block = (Blockly: any) => {
    Blockly.Blocks['blank'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(" ")
                .appendField(new Blockly.FieldTextInput("default"), "TEXT")
                .appendField(" ");
            this.setColour('#FF6680');
            this.setTooltip("");
            this.setHelpUrl("");
            this.setOutput(true, null);
        }
    }
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['blank'] = function (block: any) {
        let value = block.getFieldValue('TEXT');

        const code = `${value}`;
        return code;
    }
};