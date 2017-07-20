# react-number-keyboard
> Virtual number keyboard for react.


## size:
+ 12K	react-number-keyboard.js
+ 52K	react-number-keyboard.js.map

## props:
```javascript
  static propTypes = {
    className:PropTypes.string,
    items:PropTypes.array,
    onItemClick:PropTypes.func,
    onChange:PropTypes.func
  };
```

## usage:
```jsx
class App extends React.Component{
  constructor(props){
    super(props);
    this._list = [];
  }
  keyItemClick({item,data}){
    this._list = data;
    this.showSum();
  }

  showSum(){
    var sum = '';
    this._list.forEach(function(item){
      sum += item.content;
    });
    console.log(sum);
  }

  _change =(e) =>{
    const {value} = e.target;
    console.log(value);
  };

  render(){
    return (
      <div className="hello-react-number-keyboard">
        <ReactNumberKeyboard onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />
      </div>
    );
  }
}
```

## todos:
- [ ] remove inner string compabilty

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


