export const block = (Blockly: any) => {
  Blockly.Blocks['logic_is_equal_to_and_is_the_same_type_as'] = {
    init: function() {
      this.appendValueInput("A")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("is")
          .appendField(new Blockly.FieldDropdown([["equal to and is","==="], ["not equal to and isn't","!=="]]), "TYPE")
          .appendField("the same type as");
      this.appendValueInput("B")
          .setCheck(null);
      this.setColour('#5b80a5');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
    };

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator["logic_is_equal_to_and_is_the_same_type_as"] = function (block: any) {
        const a = javascriptGenerator.valueToCode(block, "A", javascriptGenerator.ORDER_ATOMIC);
        const b = javascriptGenerator.valueToCode(block, "B", javascriptGenerator.ORDER_ATOMIC);
        
        var type = block.getFieldValue("TYPE");
        var code = `${a} ${type} ${b}`;
        return code;
      };
}