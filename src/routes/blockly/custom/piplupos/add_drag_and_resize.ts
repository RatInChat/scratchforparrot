export const block = (Blockly: any) => {
    Blockly.Blocks['add_drag_and_resize'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Add Drag and Resize");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
        }
    }
}

export const generator = (javascriptGenerator: any) => {
    javascriptGenerator['add_drag_and_resize'] = function(block: any) {
        var code: string = `
            
    let isDragging = false;
    let isResizing = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    
    box.addEventListener('mousedown', (e) => {
      if (!restored && !isResizing) return;
      if (e.clientY <= box.offsetTop + 30) {
        isDragging = true;
        dragOffsetX = e.clientX - box.offsetLeft;
        dragOffsetY = e.clientY - box.offsetTop;
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (isDragging && !isResizing) {
        const newX = e.clientX - dragOffsetX;
        const newY = e.clientY - dragOffsetY;
        box.style.left = \`\${newX}px\`;
        box.style.top = \`\${Math.max(newY, 0)}px\`;
      }
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    let resizeDirection = '';
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    function setResizeCursor(direction) {
      let cursor = '';
      if (!restored) return;
      if (direction === 'left' || direction === 'right') {
        cursor = 'ew-resize';
      } else if (direction === 'top' || direction === 'bottom') {
        cursor = 'ns-resize';
      } else if (direction === 'top-left' || direction === 'bottom-right') {
        cursor = 'nwse-resize';
      } else if (direction === 'top-right' || direction === 'bottom-left') {
        cursor = 'nesw-resize';
      }
      box.style.cursor = cursor;
    }

    document.addEventListener('mousedown', (e) => {
      if (restored) {
        const { clientX, clientY } = e;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = box;
    
        if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'left';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'right';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          isResizing = true;
          resizeDirection = 'top';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'bottom';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          isResizing = true;
          resizeDirection = 'top-left';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          isResizing = true;
          resizeDirection = 'top-right';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'bottom-left';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          isResizing = true;
          resizeDirection = 'bottom-right';
          startX = clientX;
          startY = clientY;
          startWidth = offsetWidth;
          startHeight = offsetHeight;
        }
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (isResizing) {
        const { clientX, clientY } = e;
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
    
        if (resizeDirection.includes('left')) {
          const newWidth = startWidth - deltaX;
          box.style.width = \`\${newWidth}px\`;
          box.style.left = \`\${startX + deltaX}px\`;
        } else if (resizeDirection.includes('right')) {
          const newWidth = startWidth + deltaX;
          box.style.width = \`\${newWidth}px\`;
        }
    
        if (resizeDirection.includes('top')) {
          const newHeight = startHeight - deltaY;
          box.style.height = \`\${newHeight}px\`;
          box.style.top = \`\${startY + deltaY}px\`;
        } else if (resizeDirection.includes('bottom')) {
          const newHeight = startHeight + deltaY;
          box.style.height = \`\${newHeight}px\`;
        }
      } else {
        const { clientX, clientY } = e;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = box;
    
        if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + borderWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          setResizeCursor('left');
        } else if (
          clientX >= offsetLeft + offsetWidth - borderWidth - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          setResizeCursor('right');
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop - 2 &&
          clientY <= offsetTop + borderWidth + 2
        ) {
          setResizeCursor('top');
        } else if (
          clientX >= offsetLeft - 2 &&
          clientX <= offsetLeft + offsetWidth + 2 &&
          clientY >= offsetTop + offsetHeight - borderWidth - 2 &&
          clientY <= offsetTop + offsetHeight + 2
        ) {
          setResizeCursor('bottom');
        } else {
          box.style.cursor = 'default';
        }
      }
    });

    document.addEventListener('mouseup', () => {
      isResizing = false;
    });
        `
        return code;
    }
}