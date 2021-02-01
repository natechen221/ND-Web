import React, { Component } from 'react'
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom'
import all_teachers from './all_teachers/index'
import all_students from './all_students/index'
import all_parent from './all_parent/index'
import search_result from './search_result/index'
import axios from 'axios'

import './index.css'

export default class info_class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            classDetail: '',
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3000/classes')
        .then( (response) => {
            var {id} = this.props.match.params
            this.setState({id})
            var classDetail = response.data.find((c) => c.id === id)//返回第一个结果为true
            this.setState({classDetail})
        })
    }

    handleSearch() {
        var search_data = this.searchInput.value
        var members  = this.state.classDetail.members
        var result = members.find( (r) => r.name === search_data )

        if (result === undefined){
            alert('没有搜索结果')
        }
        else{
            const path={
                pathname:"/info_class/search_result",
                state:result,
            }
            this.props.history.push(path)
        }
        this.searchInput.value = ''
    }

    render () {
        return(
            <div>
                <div className="main_hd">
                    <div className="main-hd__text">我的班级</div>
                    <div className="main-hd-btn">
                        <Link to="/all_classes" className="main-hd__bn">返回上一级</Link>
                    </div>
                </div> 
                <hr/>
                <div className="main_bd">
                    <div className="course">
                        <div className="course-hd">
                            <div className="course-title">{this.state.classDetail.course}</div>
                            <div className="course-search">
                                <input className="course-search__input" type="text" placeholder="快捷查找" ref = { input => this.searchInput = input} />
                                <input className="course-search__btn" type="button" onClick={this.handleSearch}></input>
                            </div>
                        </div>
                        <div className="course-bd">
                            <div className="course-nav">
                                <ul>
                                    <li>
                                        <NavLink className="course-nav-item" activeStyle={{background:'white',color: '#3ba8f0'}} to={`/info_class/all_teachers/${this.state.id}`}>所有老师( {this.state.classDetail.teacher} )</NavLink>
                                    </li >
                                    <li>
                                        <NavLink className="course-nav-item" activeStyle={{background:'white',color: '#3ba8f0'}} to={`/info_class/all_students/${this.state.id}`}>所有学生( {this.state.classDetail.student} )</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="course-nav-item" activeStyle={{background:'white',color: '#3ba8f0'}} to={`/info_class/all_parent/${this.state.id}`}>所有家长( {this.state.classDetail.parent} )</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="course-item">
                                {   
                                    <Switch>
                                        <Route path="/info_class/all_teachers/:id" component={all_teachers}/>
                                        <Route path="/info_class/all_students/:id" component={all_students}/>
                                        <Route path="/info_class/all_parent/:id" component={all_parent}/>
                                        <Route path="/info_class/search_result" component={search_result}/>
                                        <Redirect to='/info_class/all_teachers/:id' />
                                    </Switch>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}