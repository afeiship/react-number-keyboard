import backspaceImg from './backspace.png';
export const generator = (inKey) => {
  return [
    {
      content: '1',
      action: 'value'
    }, {
      content: '2',
      action: 'value'
    }, {
      content: '3',
      action: 'value'
    }, {
      content: '4',
      action: 'value'
    }, {
      content: '5',
      action: 'value'
    }, {
      content: '6',
      action: 'value'
    }, {
      content: '7',
      action: 'value'
    }, {
      content: '8',
      action: 'value'
    }, {
      content: '9',
      action: 'value'
    }, {
      content: inKey,
      action: 'value',
      theme: 'gray'
    }, {
      content: '0',
      action: 'value'
    }, {
      content: `<img src=${backspaceImg} />`,
      action: 'delete',
      theme: 'gray'
    }
  ];
};
