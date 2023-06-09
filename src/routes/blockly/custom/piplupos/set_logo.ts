export const block = (Blockly: any) => {
    Blockly.Blocks['set_logo'] = {
        init: function() {
          this.appendValueInput("NAME")
              .setCheck("String")
              .appendField("Logo Url");
          this.appendDummyInput();
          this.setColour(230);
       this.setTooltip("");
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setHelpUrl("");
        }
      };
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['set_logo'] = function(block: any) {
        var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
        var code: string = `
            icon: ${value_name},
        `
        return code;
    }
}