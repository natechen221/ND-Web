import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './index.css'

export default class all_classes extends Component {

    constructor (props) {
        super(props)
        // 初始化状态
        this.state = {
            classes : []
        }
    }

    // 异步请求数据
    componentDidMount() {
        //模拟发生ajax请求
        axios.get('http://localhost:3000/classes')
        .then( (response) => {
            var classes = response.data
            this.setState({classes})
        })
    }

    render () {
        return(
            <div>
                <div className="main_hd">
                    <div className="main-hd__text">我的班级</div>
                    <div className="main-hd-btn">
                        <Link to="/create_class" className="main-hd__bn">创建班级</Link>
                    </div>
                </div>
                <hr/>
                <div className="main_bd">
                    <div className="card-main-class">
                        <p className="card-txt">行政班是为学生管理和教师管理而设置的班级</p>
                        {
                            this.state.classes.map(
                                // eslint-disable-next-line array-callback-return
                                (data,index) => {
                                    if(data.type === '行政班'){
                                        return(
                                            <div key={index}>
                                                <Link to={`/info_class/all_teachers/${data.id}`} className="card-link">
                                                    <div className="card-item">
                                                        <div className="card-box">
                                                            <div className="card-item__img">
                                                                <img src="./images/班级.png" className="card-item__photo" alt='' />
                                                            </div>
                                                            <div className="card-item__info">
                                                                <div className="card-item__title">{data.title}</div>
                                                                <div className="card-item__tab">班级：
                                                                    <span className="card-item__text">{data.class}</span>
                                                                </div>
                                                                <div className="card-item__tab">班主任：
                                                                    <span className="card-item__text">{data.name}</span>
                                                                </div>
                                                                <div className="card-item__tab">学生：
                                                                    <span className="card-item__text">{data.student}人</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-item-ft">行政班</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                    </div>
                    <div className="card-main-class">
                        <p className="card-txt">教学班是根据教学要求而设置的班级</p>
                        {
                            this.state.classes.map(
                                // eslint-disable-next-line array-callback-return
                                (data,index) => {
                                    if(data.type !== '行政班'){
                                        if(data.top === true){
                                            return(
                                                <div key={index}>
                                                    <Link to={`/info_class/all_teachers/${data.id}`} className="card-link">
                                                        <div className="card-item">
                                                            <div className="card-box">
                                                                <div className="card-item__img">
                                                                    <img src="./images/班级皇冠.png" className="card-item-class__tab" alt='' />
                                                                    <img src="./images/班级.png" className="card-item__photo" alt='' />
                                                                </div>
                                                                <div className="card-item__info">
                                                                    <div className="card-item__title">{data.title}</div>
                                                                    <div className="card-item__tab">班级：
                                                                        <span className="card-item__text">{data.class}</span>
                                                                    </div>
                                                                    <div className="card-item__tab">班主任：
                                                                        <span className="card-item__text">{data.name}</span>
                                                                    </div>
                                                                    <div className="card-item__tab">学生：
                                                                        <span className="card-item__text">{data.student}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                        else{
                                            return(
                                                <div key={index}>
                                                    <Link to={`/info_class/all_teachers/${data.id}`} className="card-link">
                                                        <div className="card-item">
                                                            <div className="card-box">
                                                                <div className="card-item__img">
                                                                    <img src="./images/班级.png" className="card-item__photo" alt='' />
                                                                </div>
                                                                <div className="card-item__info">
                                                                    <div className="card-item__title">{data.title}</div>
                                                                    <div className="card-item__tab">班级：
                                                                        <span className="card-item__text">{data.class}</span>
                                                                    </div>
                                                                    <div className="card-item__tab">班主任：
                                                                        <span className="card-item__text">{data.name}</span>
                                                                    </div>
                                                                    <div className="card-item__tab">学生：
                                                                        <span className="card-item__text">{data.student}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    }
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}