export const block = (Blockly: any) => {
    Blockly.Blocks['set_app_name'] = {
        init: function() {
          this.appendValueInput("NAME")
              .setCheck("String")
              .appendField("App Name");
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
    javascriptGenerator['set_app_name'] = function(block: any) {
        var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
        var code: string = `
            app_name: ${value_name},
        `
        return code;
    }
}