import * as baseBlock from './custom/piplupos/create_base_page.js';
import * as logic_is_equal_to_and_is_the_same_type_as from './custom/conditionals/logic_is_equal_to_and_is_the_same_type_as.js';
import * as logic_switch from './custom/conditionals/logic_switch.js';
import * as logic_case from './custom/conditionals/logic_case.js';
import * as initialize_app from './custom/piplupos/initialize_app.js';
import * as build_app from './custom/piplupos/build_app.js';
import * as set_logo from './custom/piplupos/set_logo.js';
import * as app_name from './custom/piplupos/app_name.js';
import * as close_button from './custom/piplupos/close_button.js';
import * as restore_maximize from './custom/piplupos/restore_maximize.js';
import * as minimize_button from './custom/piplupos/minimize_button.js';
import * as add_drag_and_resize from './custom/piplupos/add_drag_and_resize.js';
import * as repeat_forever from './custom/loops/repeat_forever.js';
import * as repeat_forever_with_console from './custom/loops/repeat_forever_with_console.js';
import * as repeat_forever_with_delay from './custom/loops/repeat_forever_with_delay.js';
import * as import_all from './custom/vars/import_all.js';
import * as blank from './custom/other/blank.js';
import * as buffer_from_string from './custom/buffers/buffer_from_string.js';
import * as buffer_empty from './custom/buffers/buffer_empty.js';

export function getBlocks(Blockly: any) {
    baseBlock.block(Blockly);
    logic_is_equal_to_and_is_the_same_type_as.block(Blockly);
    logic_switch.block(Blockly);
    logic_case.block(Blockly);
    initialize_app.block(Blockly);
    build_app.block(Blockly);
    set_logo.block(Blockly);
    app_name.block(Blockly);
    close_button.block(Blockly);
    restore_maximize.block(Blockly);
    minimize_button.block(Blockly);
    add_drag_and_resize.block(Blockly);
    repeat_forever.block(Blockly);
    repeat_forever_with_console.block(Blockly);
    repeat_forever_with_delay.block(Blockly);
    import_all.block(Blockly);
    blank.block(Blockly);
    buffer_from_string.block(Blockly);
    buffer_empty.block(Blockly);
}

export function getJavascript(javascriptGenerator: any) {
    baseBlock.generator(javascriptGenerator);
    logic_is_equal_to_and_is_the_same_type_as.generator(javascriptGenerator);
    logic_switch.generator(javascriptGenerator);
    logic_case.generator(javascriptGenerator);
    initialize_app.generator(javascriptGenerator);
    build_app.generator(javascriptGenerator);
    set_logo.generator(javascriptGenerator);
    app_name.generator(javascriptGenerator);
    close_button.generator(javascriptGenerator);
    restore_maximize.generator(javascriptGenerator);
    minimize_button.generator(javascriptGenerator);
    add_drag_and_resize.generator(javascriptGenerator);
    repeat_forever.generator(javascriptGenerator);
    repeat_forever_with_console.generator(javascriptGenerator);
    repeat_forever_with_delay.generator(javascriptGenerator);
    import_all.generator(javascriptGenerator);
    blank.generator(javascriptGenerator);
    buffer_from_string.generator(javascriptGenerator);
    buffer_empty.generator(javascriptGenerator);
}
