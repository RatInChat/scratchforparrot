export const block = (Blockly: any) => {
    Blockly.Blocks['repeat_forever_with_console'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("repeat forever");
          this.appendStatementInput("STATEMENTS")
              .setCheck(null)
              .appendField("do");
        this.appendValueInput("CONSOLE")
              .setCheck(null)
              .appendField("send to console")
              .appendField(new Blockly.FieldDropdown([["true","TRUE"], ["false","FALSE"]]), "Dropdown")
              .appendField("message");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour('#5ba55b');
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['repeat_forever_with_console'] = function(block: any) {
        var statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
        var console = javascriptGenerator.valueToCode(block, 'CONSOLE', javascriptGenerator.ORDER_ATOMIC);
        var dropdown = block.getFieldValue('Dropdown');

        var code = `
            while (true) {
                delay(50);
                ${statements}
                if (${dropdown.toLowerCase()}) {
                    console.log(${console});
                }
            }
        `;
        return code;
    }
}