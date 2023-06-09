export const block = (Blockly: any) => {
    Blockly.Blocks['repeat_forever_with_console_and_delay'] = {
        init: function() {
          this.appendValueInput("DELAY")
              .setCheck(null)
              .appendField("repeat forever with delay");
          this.appendStatementInput("STATEMENTS")
              .setCheck(null);
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
    javascriptGenerator['repeat_forever_with_console_and_delay'] = function(block: any) {
        var delay = javascriptGenerator.valueToCode(block, 'DELAY', javascriptGenerator.ORDER_ATOMIC);
        var statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
        var console = javascriptGenerator.valueToCode(block, 'CONSOLE', javascriptGenerator.ORDER_ATOMIC);
        var dropdown = block.getFieldValue('Dropdown');

        var code = `
            while (true) {
                delay(${delay});
                ${statements}
                if (${dropdown.toLowerCase()}) {
                    console.log(${console});
                }
            }
        `;
        return code;
    }
};