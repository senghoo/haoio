const { tag } = require("hexo/dist/plugins/helper/is");

function pushText(state, content) {
  // const token = new state.Token('text', '', 0);
  // token.content = content;
  // state.tokens.push(token);
  state.pending += content;
}

module.exports = function noBackslashEscape(md) {
    // 禁用默认的 escape 规则
    md.inline.ruler.disable('escape');
 
    // 在 text 规则之前添加我们自定义的 escape 规则
    md.inline.ruler.before('text', 'escape', function(state, silent) {
      var pos = state.pos,
          max = state.posMax;
  
      // 当前字符不是反斜杠则不处理
      if (state.src.charCodeAt(pos) !== 0x5C/* \ */) {
        return false;
      }
  
      // 如果后面还有一个反斜杠，则原样输出两个反斜杠
      if (pos + 1 < max && state.src.charCodeAt(pos + 1) === 0x5C) {
        if (!silent) {
          pushText(state, '\\\\');
        }
        state.pos += 2;
        return true;
      }
  
      // 处理其他情况：如果下一个字符是可转义的标点，则输出该字符
      var nextChar = state.src.charAt(pos + 1);
      if (/[\!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~]/.test(nextChar)) {
        if (!silent) {
          pushText(state, nextChar);
        }
        state.pos += 2;
        return true;
      }
  
      // 如果后续不是可转义字符，则按原样输出反斜杠
      if (!silent) {
        pushText(state, '\\');
      }
      state.pos++;
      return true;
    });
  };