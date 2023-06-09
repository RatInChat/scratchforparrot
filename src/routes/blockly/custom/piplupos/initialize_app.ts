export const block = (Blockly: any) => {
    Blockly.Blocks['initialize_app'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("App Information");
          this.appendStatementInput("APP_INFORMATION")
              .setCheck(null);
          this.setColour('#F79400');
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['initialize_app'] = function(block: any) {
        var statements_name = javascriptGenerator.statementToCode(block, 'APP_INFORMATION');

        var code: string = `
        module.exports = {
            ${statements_name}
          }
        `
        return code;
    };
}