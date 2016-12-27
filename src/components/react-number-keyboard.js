import './style.scss';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    keyMapList:React.PropTypes.array,
    onItemClick:React.PropTypes.func
  };

  static defaultProps = {
    onItemClick:noop,
    keyMapList:[
      {
        content:'1',
        action:'value'
      },
      {
        content:'2',
        action:'value'
      },
      {
        content:'3',
        action:'value'
      },
      {
        content:'4',
        action:'value'
      },
      {
        content:'5',
        action:'value'
      },
      {
        content:'6',
        action:'value'
      },
      {
        content:'7',
        action:'value'
      },
      {
        content:'8',
        action:'value'
      },
      {
        content:'9',
        action:'value'
      },
      {
        content:'00',
        action:'value',
        theme:'gray'
      },
      {
        content:'0',
        action:'value'
      },
      {
        content:'<img src="http://w.weipaitang.com/res/img/backspace.png" />',
        action:'delete',
        theme:'gray'
      }
    ]
  };

  constructor(props){
  	super(props);
  	this.state = {
      data:[]
    };
  }

  _onItemClick(inItem){
    var data = this.state.data;
    inItem.action == 'delete' ? data.pop() : data.push(inItem);
    this.setState({data});
    this.props.onItemClick({item:inItem,data});
  }

  render(){
    return (
      <div className={classNames('react-number-keyboard',this.props.cssClass)}>
        <div className="bd">
          <div className="wrapper">
            {this.props.keyMapList.map(function(item,index){
              return <button onClick={this._onItemClick.bind(this,item)} data-theme={item.theme ? item.theme : null} className="cell" key={index} dangerouslySetInnerHTML={{__html: item.content}}></button>
            }.bind(this))}
          </div>
        </div>
      </div>
    );
  }
}
