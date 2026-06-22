(function() {
  window.currentTool = 'select';

  // Listen for messages from the parent Next.js application
  window.addEventListener('message', function(event) {
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    if (data.type === 'select-tool') {
      window.currentTool = data.tool;
      triggerExtensionTool(data.tool);
    }
  });

  // Intercept clicks inside the iframe document in capture phase
  document.addEventListener('click', function(event) {
    const target = event.target;
    const page = target.closest('.page');
    if (!page) return;

    const pageIndex = parseInt(page.getAttribute('data-page-number')) - 1;
    const pageRect = page.getBoundingClientRect();
    const x = event.clientX - pageRect.left;
    const y = event.clientY - pageRect.top;

    const isSpan = (
      target.tagName === 'SPAN' &&
      target.parentElement &&
      target.parentElement.classList.contains('textLayer')
    );

    if (window.currentTool === 'text') {
      // Intercept the click event
      event.preventDefault();
      event.stopPropagation();

      if (isSpan) {
        // 1. Clicked on an existing text block -> EDIT TEXT
        const spanRect = target.getBoundingClientRect();
        const styles = window.getComputedStyle(target);
        
        window.parent.postMessage({
          type: 'text-clicked',
          pageIndex: pageIndex,
          originalText: target.textContent || '',
          x: spanRect.left - pageRect.left,
          y: spanRect.top - pageRect.top,
          width: spanRect.width,
          height: spanRect.height,
          fontSize: parseFloat(styles.fontSize) || 12,
          fontFamily: styles.fontFamily || 'Helvetica, sans-serif',
          color: styles.color || 'rgb(0, 0, 0)',
          fontWeight: styles.fontWeight || 'normal',
          fontStyle: styles.fontStyle || 'normal',
          spanId: getOrCreateSpanId(target)
        }, '*');
      } else {
        // 2. Clicked on empty space inside a page -> ADD NEW TEXT
        const defaultFontSize = 14;
        const defaultFontFamily = 'Helvetica, sans-serif';
        const defaultColor = 'rgb(0, 0, 0)';
        const spanId = 'new-text-' + Date.now();

        window.parent.postMessage({
          type: 'new-text-clicked',
          pageIndex: pageIndex,
          x: x,
          y: y - 10, // Slight vertical offset to center cursor
          width: 150,
          height: 24,
          fontSize: defaultFontSize,
          fontFamily: defaultFontFamily,
          color: defaultColor,
          fontWeight: 'normal',
          fontStyle: 'normal',
          spanId: spanId
        }, '*');
      }
    }
  }, true);

  // Generate or retrieve a unique ID for a span
  let spanIdCounter = 0;
  function getOrCreateSpanId(span) {
    if (span.id) return span.id;
    const id = 'pdfjs-text-span-' + (++spanIdCounter);
    span.id = id;
    return id;
  }

  // Find and click the native button in the hidden CustomToolbar
  function triggerExtensionTool(toolName) {
    const toolbar = document.querySelector('.CustomToolbar');
    if (!toolbar) {
      setTimeout(function() { triggerExtensionTool(toolName); }, 200);
      return;
    }

    const buttons = toolbar.querySelectorAll('li, button');
    
    // Map of tool names to keywords in English/Chinese
    const map = {
      draw: ['draw', '画笔', '铅笔', 'pen', 'pencil'],
      eraser: ['eraser', '橡皮', 'clear'],
      highlight: ['highlight', '高亮'],
      underline: ['underline', '下划线'],
      strikeout: ['strikeout', '删除线', '中划线'],
      rect: ['rect', '矩形', 'rectangle'],
      circle: ['circle', 'ellipse', 'oval', '圆形', '椭圆'],
      line: ['line', '直线', '线'],
      arrow: ['arrow', '箭头'],
      image: ['image', '图片', 'stamp', '印章'],
      sign: ['signature', 'sign', '签名'],
      text: ['text', '文本'],
      // Forms support
      'form-text': ['form-text', 'text-field', '输入框', '文本框', 'text field'],
      'form-checkbox': ['form-checkbox', 'checkbox', '复选框', 'check box'],
      'form-radio': ['form-radio', 'radio', '单选框', 'radio button'],
      'form-dropdown': ['form-dropdown', 'dropdown', 'select', '下拉框', 'combo box']
    };

    const keywords = map[toolName];
    if (!keywords) return;

    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i];
      const text = (btn.textContent || '').toLowerCase();
      const title = (btn.title || btn.getAttribute('title') || '').toLowerCase();
      const className = (btn.className || '').toLowerCase();

      const isMatch = keywords.some(function(kw) {
        return text.indexOf(kw) !== -1 || title.indexOf(kw) !== -1 || className.indexOf(kw) !== -1;
      });

      if (isMatch) {
        btn.click();
        break;
      }
    }
  }
})();
