import './dev.scss';

import ReactNumberKeyboard,{generator} from './main';

class App extends React.Component{
  state = {
    value:[]
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
    console.log(value);
  };

  _click1 = (e) =>{
    this.setState({value:[]});
  };

  render(){
    return (
      <div className="hello-react-number-keyboard">
        <button onClick={this._click1}>Clear Value</button>
        <ReactNumberKeyboard value={this.state.value} onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />
        <ReactNumberKeyboard items={generator('X')} value={this.state.value} onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />
        <ReactNumberKeyboard items={generator('...')} value={this.state.value} onChange={this._change} onItemClick={this.keyItemClick.bind(this)} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
