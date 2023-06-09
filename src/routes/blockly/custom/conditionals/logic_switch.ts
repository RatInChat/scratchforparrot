export const block = (Blockly: any) => {
    Blockly.Blocks['logic_switch'] = {
        init: function() {
          this.appendValueInput("condition")
              .setCheck(["String", "Number"])
              .appendField("switch");
          this.appendDummyInput();
          this.appendStatementInput("blocks")
              .setCheck(null);
          this.setColour('#5b80a5');
       this.setTooltip("");
       this.setHelpUrl("");
       this.setPreviousStatement(true);
       this.setNextStatement(true);
        }
      };
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['logic_switch'] = function(block: any) {
        var condition = javascriptGenerator.valueToCode(block, 'condition', javascriptGenerator.ORDER_ATOMIC);
        var statements_blocks = javascriptGenerator.statementToCode(block, 'blocks');

        var code: string = `
            switch (${condition}) {
                ${statements_blocks}
            }
        `
        return code;
    };
}