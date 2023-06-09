export const block = (Blockly: any) => {
    Blockly.Blocks['build_app'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Build App");
            this.appendStatementInput("APP_BUILD")
                .setCheck(null);
            this.setColour(230);
            this.setPreviousStatement(true);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }
};

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['build_app'] = function(block: any) {
        var statements = javascriptGenerator.statementToCode(block, 'APP_BUILD');

        var code: string = `
        async execute(mainframe, data, page) {
            ${statements}
        }
        `
        return code;
    };
}