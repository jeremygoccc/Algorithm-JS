/**
 * 逆波兰表达式求值
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 */

const tokens = ["4","13","5","/","+"];

var evalRPN = function(tokens) {
  var map = ["+", "-", "*", "/"];
  var stack = [];
  for (var i = 0, len = tokens.length; i < len; i++) {
      if (map.includes(tokens[i])) {
          var second = +stack.pop();
          var first = +stack.pop();
          var res = void 0;
          switch(tokens[i]) {
              case '+': res = first + second;
                  break;
              case '-': res = first - second;
                  break;
              case '*': res = first * second;
                  break;
              case '/': res = first / second;
                  break;
          }
          stack.push(parseInt(res));
      } else {
          stack.push(tokens[i]);
      }
  }
  return stack.pop();
};

console.log(evalRPN(tokens));