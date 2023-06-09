export default () => {
    return (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        <category name="Logic" colour="#5b80a5">
            <block type="controls_if" />
            <block type="logic_compare">
                <field name="OP">EQ</field>
            </block>
            <block type="logic_operation">
                <field name="OP">AND</field>
            </block>
            <block type="logic_negate" />
            <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>
            <block type="logic_null" />
            <block type="logic_ternary" />
            <block type="logic_is_equal_to_and_is_the_same_type_as" />
            <block type="logic_switch" />
            <block type="logic_case" />
        </category>
        <category name="Loops" colour="#5ba55b">
            <block type="repeat_forever" />
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <block type="math_number">
                        <field name="NUM">10</field>
                    </block>
                </value>
            </block>
            <block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>
            <block type="controls_for">
                <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">i</field>
                <value name="FROM">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="TO">
                    <block type="math_number">
                        <field name="NUM">10</field>
                    </block>
                </value>
                <value name="BY">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
            </block>
            <block type="controls_forEach">
                <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">j</field>
            </block>
            <block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>
            <label text="More Options" web-class="boldtext"/>
            <block type="repeat_forever_with_console" />
            <block type="repeat_forever_with_console_and_delay" />
        </category>
        <category name="Math" colour="#5b67a5">
            <block type="math_number">
                <field name="NUM">0</field>
            </block>
            <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="B">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
            </block>
            <block type="math_single">
                <field name="OP">ROOT</field>
                <value name="NUM">
                    <block type="math_number">
                        <field name="NUM">9</field>
                    </block>
                </value>
            </block>
            <block type="math_trig">
                <field name="OP">SIN</field>
                <value name="NUM">
                    <block type="math_number">
                        <field name="NUM">45</field>
                    </block>
                </value>
            </block>
            <block type="math_constant">
                <field name="CONSTANT">PI</field>
            </block>
            <block type="math_number_property">
                <mutation divisor_input="false" />
                <field name="PROPERTY">EVEN</field>
                <value name="NUMBER_TO_CHECK">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
            </block>
            <block type="math_round">
                <field name="OP">ROUND</field>
                <value name="NUM">
                    <block type="math_number">
                        <field name="NUM">3.1</field>
                    </block>
                </value>
            </block>
            <block type="math_on_list">
                <mutation op="SUM" />
                <field name="OP">SUM</field>
            </block>
            <block type="math_modulo">
                <value name="DIVIDEND">
                    <block type="math_number">
                        <field name="NUM">64</field>
                    </block>
                </value>
                <value name="DIVISOR">
                    <block type="math_number">
                        <field name="NUM">10</field>
                    </block>
                </value>
            </block>
            <block type="math_constrain">
                <value name="VALUE">
                    <block type="math_number">
                        <field name="NUM">50</field>
                    </block>
                </value>
                <value name="LOW">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="HIGH">
                    <block type="math_number">
                        <field name="NUM">100</field>
                    </block>
                </value>
            </block>
            <block type="math_random_int">
                <value name="FROM">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="TO">
                    <block type="math_number">
                        <field name="NUM">100</field>
                    </block>
                </value>
            </block>
            <block type="math_random_float" />
        </category>
        <category name="Text" colour="#5ba58c">
            <block type="text">
                <field name="TEXT" />
            </block>
            <block type="text_join">
                <mutation items="2" />
            </block>
            <block type="text_append">
                <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">item</field>
                <value name="TEXT">
                    <block type="text">
                        <field name="TEXT" />
                    </block>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
            </block>
            <block type="text_isEmpty">
                <value name="VALUE">
                    <block type="text">
                        <field name="TEXT" />
                    </block>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
            </block>
            <block type="text_charAt">
                <mutation at="true" />
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">text</field>
                    </block>
                </value>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
            </block>
            <block type="text_print">
                <value name="TEXT">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
            </block>
            <block type="text_prompt_ext">
                <mutation type="TEXT" />
                <field name="TYPE">TEXT</field>
                <value name="TEXT">
                    <block type="text">
                        <field name="TEXT">abc</field>
                    </block>
                </value>
            </block>
        </category>
        <category name="Lists" colour="#745ba5">
            <block type="lists_create_with">
                <mutation items="0" />
            </block>
            <block type="lists_create_with">
                <mutation items="3" />
            </block>
            <block type="lists_repeat">
                <value name="NUM">
                    <block type="math_number">
                        <field name="NUM">5</field>
                    </block>
                </value>
            </block>
            <block type="lists_length" />
            <block type="lists_isEmpty" />  
            <block type="lists_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getIndex">
                <mutation statement="false" at="true" />
                <field name="MODE">GET</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_setIndex">
                <mutation at="true" />
                <field name="MODE">SET</field>
                <field name="WHERE">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getSublist">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="^:v?~q4!-!-!-!-!-!-" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_split">
                <mutation mode="SPLIT" />
                <field name="MODE">SPLIT</field>
                <value name="DELIM">
                    <block type="text">
                        <field name="TEXT">,</field>
                    </block>
                </value>
            </block>
            <block type="lists_sort">
                <field name="TYPE">NUMERIC</field>
                <field name="DIRECTION">1</field>
            </block>
        </category>
        <category name="Colour" colour="#a5745b">
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random" />
            <block type="colour_rgb">   
                <value name="RED">
                    <block type="math_number">
                        <field name="NUM">100</field>
                    </block>
                </value>
                <value name="GREEN">
                    <block type="math_number">
                        <field name="NUM">50</field>
                    </block>
                </value>
                <value name="BLUE">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
            </block>
            <block type="colour_blend">
                <value name="COLOUR1">
                    <block type="colour_picker">
                        <field name="COLOUR">#ff0000</field>
                    </block>
                </value>
                <value name="COLOUR2">
                    <block type="colour_picker">
                        <field name="COLOUR">#3333ff</field>
                    </block>
                </value>
                <value name="RATIO">
                    <block type="math_number">
                        <field name="NUM">0.5</field>
                    </block>
                </value>
            </block>
        </category>
        <sep />
        <category name="Variables" colour="#a55b80" custom="VARIABLE" />
        <category name="Expanded Variables" colour="#a55b80">
        <label text="Make global/local variables for functions and other stuff"/>
            <block type="import_all">
            <value name="VAR">
                    <block type="text">
                        <field name="TEXT"/>hey
                    </block>
                </value>
            </block>
            <block type="blank">
                <field name="TEXT"/>
            </block>
        </category>
        <category name="Functions" colour="#995ba5" custom="PROCEDURE" />
        <category name="Collections" colour="#dd8452">
            <label text="Coming soon!"/>
        </category>
        <category name="Buffers" colour="#c75416">
            <label text="create a buffer"/>
            <block type="buffer_from_string">
                <value name="string">
                    <block type="text">
                        <field name="TEXT">Hello World!</field>
                    </block>
                </value>
            </block>
            <block type="buffer_empty">
                <value name="value">
                    <block type="math_number">
                        <field name="NUM">255</field>
                    </block>
                </value>
                <value name="length">
                    <block type="math_number">
                        <field name="NUM">5</field>
                    </block>
                </value>
            </block>
            <label text="More Soon!"/>
        </category>
        <category name="Objects" colour="#9e5831">
            <label text="Coming soon!"/>
        </category>
        <sep />
        <category name="PiplupOS" colour="#2e05a1">
            <block type="initialize_app" />
            <block type="set_app_name" />
            <block type="set_logo" />
            <block type="build_app" />
            <block type="create_base_page" />
            <block type="close_button" />
            <block type="restore_maximize" />
            <block type="minimize_button" />
            <block type="add_drag_and_resize" />
        </category>
        </xml>
    `)
}