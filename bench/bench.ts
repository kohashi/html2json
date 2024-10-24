import { json2html, html2json } from '../index';

if (typeof console.time === 'undefined') {
  console.time = function(tag: string) {
    this[tag] = Date.now();
  };
  console.timeEnd = function(tag: string) {
    console.log(tag, Date.now() - this[tag], 'ms');
  };
}

const json = {
  tag: 'div',
  attr: {
    id: '1',
    class: ['foo'],
  },
  child: [
    {
      tag: 'h2',
      text: 'sample text with <code>inline tag</code>',
    },
    {
      tag: 'pre',
      attr: {
        id: 'demo',
        class: ['foo', 'bar'],
      }
    },
    {
      tag: 'pre',
      attr: {
        id: 'output',
        class: ['goo'],
      }
    },
    {
      tag: 'input',
      attr: {
        id: 'execute',
        type: 'button',
        value: 'execute',
      }
    }
  ]
};

console.time('json2html');
for (let i = 0; i < 1000; i++) {
  json2html(json);
}
console.timeEnd('json2html');

const html = ''
  + '<div id="1" class="foo">'
  + '<h2>sample text with <code>inline tag</h2>'
  + '<pre id="demo" class="foo bar"></pre>'
  + '<pre id="output" class="goo"></pre>'
  + '<input id="execute" type="button" value="execute"/>'
  + '</div>';

console.time('html2json');
for (let j = 0; j < 1000; j++) {
  html2json(html);
}
console.timeEnd('html2json');
