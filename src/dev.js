import './dev.scss';
import ReactNumberKeyboard from './main';


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


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
