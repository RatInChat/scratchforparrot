export function makeChecklistMutator(Blockly: any, names: any, menuName: any, menuTooltip: any, BORDER_FIELDS: any, BORDER_TYPES: any) {
  Blockly.Blocks[menuName] = {
    init: function () {
      this.setColour(230);
      this.setTooltip(menuTooltip);
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks[menuName].decompose = function (workspace: any) {
    const containerBlock = workspace.newBlock(menuName);
    for (let i = 0; i < this.inputs_.length; i++) {
      Blockly.Msg[BORDER_FIELDS[i]] = names[i];
      containerBlock
        .appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(names[i])
        .appendField(
          new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"),
          BORDER_FIELDS[i].toUpperCase()
        );
    }
    containerBlock.initSvg();
    return containerBlock;
  };

  Blockly.Blocks[menuName].compose = function (containerBlock: any) {
    // Set states
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] =
        containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == "TRUE";
    }
    this.updateShape_();
  };

  Blockly.Blocks[menuName].updateShape_ = function () {
    for (let i = 0; i < this.inputs_.length; i++) {
      if (
        !this.inputs_[i] &&
        this.getInput(BORDER_FIELDS[i].toUpperCase())
      ) {
        this.removeInput(BORDER_FIELDS[i].toUpperCase());
      }
    }
    for (let i = 0; i < this.inputs_.length; i++) {
      if (
        this.inputs_[i] &&
        !this.getInput(BORDER_FIELDS[i].toUpperCase())
      ) {
        Blockly.Msg[BORDER_FIELDS[i]] = names[i];
        this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
          .setCheck(BORDER_TYPES[i])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(names[i]);
      }
    }
  };

  return Blockly.Blocks[menuName];
}
