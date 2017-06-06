import './dev.scss';

import ReactNumberKeyboard,{generator} from './main';

class App extends React.Component{
  state = {
    value:[
      {
        content: '8',
        action: 'value'
      }, {
        content: '0',
        action: 'value'
      },
      {
        content: '0',
        action: 'value'
      }
    ],
    // value:'8000'
  };

  constructor(props){
    super(props);
    this._list = [];
  }

  keyItemClick({item,value}){
    this._list = value;
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
    console.log(value)
    this.setState({value});
  };

  _click1 = (e) =>{
    this.setState({value:[]});
  };

  showValues(){
    if(Array.isArray(this.state.value)){
      return this.state.value.map(item=>{
        return item.content;
      }).join('');
    }
    return this.state.value;
  }

  render(){
    return (
      <div className="hello-react-number-keyboard">
        <p>{this.showValues()}</p>
        <button onClick={this._click1}>Clear Value</button>
        <ReactNumberKeyboard maxLength={16} items={generator('...',true)} value={this.state.value} onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />
        {false && <ReactNumberKeyboard items={generator('X')} value={this.state.value} onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />}
        {false && <ReactNumberKeyboard items={generator('...')} value={this.state.value} onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />}
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
