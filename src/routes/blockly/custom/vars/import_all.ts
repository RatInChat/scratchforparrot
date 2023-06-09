export const block = (Blockly: any) => {
    Blockly.Blocks['import_all'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["const", "const"], ["let", "let"], ["var", "var"], ["set", "set"]]), "TYPE");
            this.appendValueInput("VAR")
                .setCheck("String")
            this.appendValueInput("CONTENT")
                .appendField("=")
                .setCheck(null)
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#FF6680');
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['import_all'] = function (block: any) {
        const type = block.getFieldValue("TYPE") == 'set' ? '' : block.getFieldValue("TYPE");
        var value_var = javascriptGenerator.valueToCode(block, 'VAR', javascriptGenerator.ORDER_ATOMIC);
        let value_var2 = value_var.substring(1, (value_var.length - 1));
        var value_content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);

        const code = `${type} ${value_var2} = ${value_content};`
        return code;
    };
};
