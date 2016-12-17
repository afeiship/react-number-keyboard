import './dev.scss';
import ReactNumberKeyboard from './main';


class App extends React.Component{
  constructor(props){
    super(props);
    this._list = [];
  }
  keyItemClick(inItem){
    if(inItem.action == 'delete'){
      this._list.pop();
    }else{
      this._list.push(inItem);
    }

    this.showSum();
  }

  showSum(){
    var sum = '';
    this._list.forEach(function(item){
      sum += item.content;
    });
    console.log(sum);
  }

  render(){
    return (
      <div className="hello-react-number-keyboard">
        <ReactNumberKeyboard keyItemClick={this.keyItemClick.bind(this)} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
