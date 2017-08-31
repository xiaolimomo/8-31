/**
 * Created by zhangli on 2017/8/30.
 */
import React ,{Component} from 'react'
import Add from '../Add/Add'
import List from '../List/List'

export default class App extends Component{
    //初始化状态
    state = {
      comments:[
        {username:'秋水',content:'React so easy!'},
        {username:'小红',content:'React just so so !'},
      ]
    }


  addComment = (comment)=>{
    const {comments}=this.state
    comments.unshift(comment)//在首位添加一个元素
    this.setState({comments})
  }
  deleteComment=(index)=>{
    const{comments} = this.state
    comments.splice(index,1)//删除指定下标的元素,注意：splice会直接改变原数组
    this.setState({comments})
  }


  render(){
    const {comments}=this.state
    return(
      <div>
          <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
               <Add addComment={this.addComment}/>
               <List comments={comments} deleteComment={this.deleteComment}/>
            </div>
          </div>
      </div>
    )
  }
}