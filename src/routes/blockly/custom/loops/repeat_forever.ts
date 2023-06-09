export const block = (Blockly: any) => {
    Blockly.Blocks['repeat_forever'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("repeat forever");
          this.appendStatementInput("STATEMENTS")
              .setCheck(null)
              .appendField("do");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour('#5ba55b');
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['repeat_forever'] = function(block: any) {
        var statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');

        var code = `
            while (true) {
                delay(50);
                ${statements}
            }
        `;
        return code;
    }
}