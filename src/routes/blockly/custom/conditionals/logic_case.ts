const INTERNALS = ['logic_case_INTERNAL_case1', 'logic_case_INTERNAL_case2', 'logic_case_INTERNAL_case3', 'logic_case_INTERNAL_case4', 'logic_case_INTERNAL_default']

export const block = (Blockly: any) => {
Blockly.Blocks['logic_case'] = {
    init: function () {
        this.setHelpUrl("");
        this.setInputsInline(true)
        this.setColour("#5b80a5");
        this.appendValueInput('IF0')
            .setCheck(null)
            .appendField("case");
        this.appendStatementInput('DO0')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator([
            INTERNALS[1],
            INTERNALS[2],
            INTERNALS[3],
            INTERNALS[4]
        ]));
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
        this.mutatorMenuBlockTypes = []
        this.blockWarnings = []
    },

    mutationToDom: function () {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseifCount_) {
            container.setAttribute('elseif', this.elseifCount_);
            container.setAttribute('mutatorblocks', this.mutatorMenuBlockTypes.join(",") || "");
        }
        if (this.elseCount_) {
            // @ts-ignore
            container.setAttribute('else', 1);
        }
        return container;
    },

    domToMutation: function (xmlElement: any) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
        this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
        let menutypes = xmlElement.getAttribute('mutatorblocks')?.split(",")
        if (menutypes == null) menutypes = Array(this.elseifCount_).fill("case")
        this.mutatorMenuBlockTypes = menutypes
        this.updateShape_();
    },
    decompose: function (workspace: any) {
        var containerBlock = workspace.newBlock('logic_case_INTERNAL_case1');
        containerBlock.initSvg();
        var connection = containerBlock.nextConnection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock('logic_case_INTERNAL_case' + (this.mutatorMenuBlockTypes[i - 1] == "case" ? 2 : this.mutatorMenuBlockTypes[i - 1] == "or" ? 3 : 4));
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock('logic_case_INTERNAL_default');
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection);
        }
        return containerBlock;
    },
    compose: function (containerBlock: any) {
        var clauseBlock = containerBlock.nextConnection.targetBlock();
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
        this.mutatorMenuBlockTypes = []
        var valueConnections = [null];
        var statementConnections = [null];
        var elseStatementConnection = null;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'logic_case_INTERNAL_case2':
                case 'logic_case_INTERNAL_case3':
                case 'logic_case_INTERNAL_case4':
                    this.mutatorMenuBlockTypes[this.elseifCount_] = (clauseBlock.type == 'logic_case_INTERNAL_case2' ? "case" : clauseBlock.type == 'logic_case_INTERNAL_case3' ? "or" : "continue")
                    this.elseifCount_++;
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push(clauseBlock.statementConnection_);
                    break;
                case 'logic_case_INTERNAL_default':
                    this.elseCount_++;
                    elseStatementConnection = clauseBlock.statementConnection_;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
        this.updateShape_();
        for (var i = 1; i <= this.elseifCount_; i++) {
            Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
            Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
        }
        Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
    },
    saveConnections: function (containerBlock: any) {
        var clauseBlock = containerBlock.nextConnection.targetBlock();
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'logic_case_INTERNAL_case2':
                case 'logic_case_INTERNAL_case3':
                case 'logic_case_INTERNAL_case4':
                    var inputIf = this.getInput('IF' + i);
                    var inputDo = this.getInput('DO' + i);
                    clauseBlock.valueConnection_ =
                        inputIf && inputIf.connection.targetConnection;
                    if (inputDo.connection) {
                        clauseBlock.statementConnection_ =
                            inputDo && inputDo.connection.targetConnection;
                    }
                    i++;
                    break;
                case 'logic_case_INTERNAL_default':
                    inputDo = this.getInput('ELSE');
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    break;
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        if (this.getInput('ELSE')) {
            this.removeInput('asvutdgyhebkf');
            this.removeInput('ELSE');
        }
        var i = 1;
        while (this.getInput('IF' + i)) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
            i++;
        }
        this.mutatorMenuBlockTypes.slice(0, this.elseifCount_)
        for (i = 1; i <= this.elseifCount_ + this.mutatorMenuBlockTypes.length; i++) {
            if (this.getInput('continueWithDisplayText' + i)) {
                this.removeInput('continueWithDisplayText' + i);
            }
        }
        for (i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck(null)
                .appendField("case");
            if (this.mutatorMenuBlockTypes[i - 1] == "case" || this.mutatorMenuBlockTypes[i - 1] == "continue") {
                this.appendStatementInput('DO' + i)
            } else {
                this.appendDummyInput('DO' + i)
                    .appendField("or");
            }
            if (this.mutatorMenuBlockTypes[i - 1] == "continue") {
                this.appendDummyInput('continueWithDisplayText' + i)
                    .appendField("continue with");
            }
        }
        if (this.elseCount_) {
            this.appendDummyInput("asvutdgyhebkf")
                .appendField("default");
            this.appendStatementInput('ELSE')
        }
        if (this.mutatorMenuBlockTypes.length > 0) {
            if ((this.mutatorMenuBlockTypes[this.mutatorMenuBlockTypes.length - 1] != "case") && (!this.elseCount_)) {
                this.blockWarnings.push('You cannot end the block with a "case or" or "case continue with" block!')
            }
        }
        if (this.blockWarnings.length > 0) {
            this.setWarningText(this.blockWarnings.join("\n"))
        } else {
            this.setWarningText(null)
        }
        this.blockWarnings = []
    }
};

Blockly.Blocks["logic_case_INTERNAL_case1"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "case",
                "args0": [],
                "colour": "#5b80a5",
                "nextStatement": null,
                "tooltip": "The first case, checking if the switched item is equal to this cases value."
            }
        );
    }
};
Blockly.Blocks["logic_case_INTERNAL_case2"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "case",
                "args0": [],
                "colour": "#5b80a5",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "The next case, checking if the switched item is equal to this cases value."
            }
        );
    }
};
Blockly.Blocks["logic_case_INTERNAL_case3"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "case or",
                "args0": [],
                "colour": "#5b80a5",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Checks if the switched item is equal to this case. If it is, run all cases until the next normal case."
            }
        );
    }
};
Blockly.Blocks["logic_case_INTERNAL_case4"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "case continue with",
                "args0": [],
                "colour": "#5b80a5",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "If the switched item is equal to this case, run the blocks inside and below until the next normal case."
            }
        );
    }
};
Blockly.Blocks["logic_case_INTERNAL_default"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "default",
                "args0": [],
                "colour": "#5b80a5",
                "previousStatement": null,
                "tooltip": "The \"default\" case, checking if the switched item is not equal to any of the previous cases values."
            }
        );
    }
};
};
export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['logic_case'] = function (block: any) {
        var n = 0;
        var code = '', branchCode, conditionCode;
        while (block.getInput('IF' + n)) {
            conditionCode = javascriptGenerator.valueToCode(block, 'IF' + n, javascriptGenerator.ORDER_NONE) || 'false';
            branchCode = javascriptGenerator.statementToCode(block, 'DO' + n);
            code += `case ${conditionCode}: 
        ${branchCode}${block.mutatorMenuBlockTypes[n - 1] == "case" || n == 0 ? "\nbreak;" : ""}`
            ++n;
        }
        if (block.getInput('ELSE')) {
            branchCode = javascriptGenerator.statementToCode(block, 'ELSE');
            code += `default:
        ${branchCode}
        break;`;
        }
        return code + '\n';
    };

    javascriptGenerator['logic_case_INTERNAL_case1'] = function () {
        return ''
    }
    javascriptGenerator['logic_case_INTERNAL_case2'] = function () {
        return ''
    }
    javascriptGenerator['logic_case_INTERNAL_case3'] = function () {
        return ''
    }
    javascriptGenerator['logic_case_INTERNAL_case4'] = function () {
        return ''
    }
    javascriptGenerator['logic_case_INTERNAL_default'] = function () {
        return ''
    }
};