export const block = (Blockly: any) => {
    Blockly.Blocks['buffer_from_string'] = {
        init: function() {
          this.appendValueInput("string")
              .setCheck("String")
              .appendField("create buffer from");
          this.appendDummyInput()
              .appendField("with encoding")
                .appendField(new Blockly.FieldDropdown([["utf8","utf8"], ["ascii","ascii"], ["utf16le","utf16le"], ["ucs2","ucs2"], ["base64","base64"], ["latin1","latin1"], ["binary","binary"], ["hex","hex"]]), "encoding");
            this.setInputsInline(true);
            this.setOutput(true, "Buffer");
            this.setColour('#FF6680');
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['buffer_from_string'] = function(block: any) {
        var value_string = javascriptGenerator.valueToCode(block, 'string', javascriptGenerator.ORDER_ATOMIC);
        var dropdown_encoding = block.getFieldValue('encoding');

        const code = `Buffer.from(${value_string}, '${dropdown_encoding}')`;
        return [code, javascriptGenerator.ORDER_NONE];
    }
};
