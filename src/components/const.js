import backspaceImg from './backspace.png';
export const generator = (inKey, inIgnore) => {
  return [
    {
      content: '1',
      action: 'value',
      ignore:false
    }, {
      content: '2',
      action: 'value',
      ignore:false
    }, {
      content: '3',
      action: 'value',
      ignore:false
    }, {
      content: '4',
      action: 'value',
      ignore:false
    }, {
      content: '5',
      action: 'value',
      ignore:false
    }, {
      content: '6',
      action: 'value',
      ignore:false
    }, {
      content: '7',
      action: 'value',
      ignore:false
    }, {
      content: '8',
      action: 'value',
      ignore:false
    }, {
      content: '9',
      action: 'value',
      ignore:false
    }, {
      content: inKey,
      action: 'value',
      theme: 'gray',
      ignore: inIgnore
    }, {
      content: '0',
      action: 'value',
      ignore:false
    }, {
      content: ``,
      action: 'delete',
      ignore:false
    }
  ];
};
