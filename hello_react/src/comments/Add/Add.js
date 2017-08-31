/**
 * Created by zhangli on 2017/8/30.
 */
//{}中表示解构赋值
import React ,{Component,PropTypes} from 'react'

export default class Add extends Component{

  static propTypes = {// 给Add添加属性
    addComment: PropTypes.func.isRequired
  }
/*  constructor(props){
    super(props)
    //初始化，给Add的实例对象添加state属性
    this.state={
      content:''
    }
    console.log(this.props)
  }*/
  state = { // 给Add的实例对象添加state属性
    content: ''
  }

/*  当提交表单时，会发生 submit 事件。
    该事件只适用于表单元素。
    submit() 方法触发 submit 事件，或规定当发生 submit 事件时运行的函数。
 */
  submit = ()=>{
    //得到输入的数据
    const username = this.refs.username.value.trim()
    const content = this.state.content.trim()
    //检查是否有数据,return会跳出整个函数体
    if(!username || !content){
      return
    }
    // todo 包装成comment对象
    const comment ={username, content}
    // todo 添加到comments中显示
    this.props.addComment(comment)

    //清除输入
    this.refs.username.value =''
    this.setState({content:''})

  }

  handleChange = (event)=>{
     //得到最新输入的值
    const content = event.target.value
    // 更新状态
    this.setState({content})
  }

  render(){
    const {content} = this.state
    return(
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="username"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            {/*<textarea> 标签定义一个多行的文本输入控件。*/}
            <textarea className="form-control" rows="6" placeholder="评论内容"
              onChange={this.handleChange}  value={content}> </textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}