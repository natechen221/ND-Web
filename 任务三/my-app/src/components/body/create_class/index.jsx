import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './index.css'

export default class create_class extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedType: '',
            selectedPermission: '',
            phaseOption:[
                { value: '小学', label: '小学' },
                { value: '初中', label: '初中' },
                { value: '高中', label: '高中' },
                { value: '大学', label: '大学' }
            ],
            degreeOption:[
                { value: '一年级', label: '一年级' },
                { value: '二年级', label: '二年级' },
                { value: '三年级', label: '三年级' },
            ]
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        this.handlePermissionChange = this.handlePermissionChange.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        const school = this.schoolInput.value
        const phase = this.phaseSelect.value
        const degree = this.degreeSelect.value
        const className = this.classNameInput.value

        const class_item = { 
                    "title": phase + school,
                    "class": className,
                    "name": '刘老师',
                    "teacher": '1',
                    "student": '0',
                    "parent": '0',
                    "type": this.state.selectedType,
                    "course": degree,
                    "top": false,
                    "members": [{"name": "刘老师", "manager": false, "occupation":"老师", "type": "班主任"}]
                }
        
        axios.post('http://localhost:3000/classes',class_item)
        .then( () =>{
            this.props.history.push('/all_classes')
        })
        .catch(function (error) {
            alert('发生错误了请重新创建')
        })
    }

    handleTypeChange(e) {
        this.setState({
            selectedType:e.target.value
        })
    }

    handlePermissionChange(e) {
        this.setState({
            selectedPermission:e.target.value
        })
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
                    <form className="class-form" onSubmit={this.handleSubmit}>
                        <div className="class-box">
                            <div className="class-info">
                                尊敬的<span className="class-teacher">老师（刘老师）</span>, 请填写班级信息：
                            </div>
                            <div className="class-item">
                                <span className="class-title">学校</span>
                                <input type="text" className="class-input" placeholder="请选择学校" 
                                       ref={input => this.schoolInput = input}/>
                            </div>
                            {/* 学段 */}
                            <div className="class-item">
                                <span className="class-title">
                                    <span className="class-title__star">*&nbsp;</span>
                                    学段
                                </span>
                                <select className="class-select"
                                        defaultValue=''
                                        ref={select => this.phaseSelect = select}
                                        required
                                >
                                    <option value="" disabled>请选择学段</option>
                                    {
                                        this.state.phaseOption.map( item =>{
                                            return(
                                                <option key={item.value} value={item.value}>{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            {/* 年级 */}
                            <div className="class-item">
                                <span className="class-title">
                                    <span className="class-title__star">*&nbsp;</span>
                                    年级
                                </span>
                                <select 
                                    className="class-select" 
                                    defaultValue=""
                                    ref={select => this.degreeSelect = select}
                                    required
                                > 
                                    <option value="" disabled>请选择年级</option>
                                    {
                                        this.state.degreeOption.map( item =>{
                                            return(
                                                <option key={item.value} value={item.value}>{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            {/* 班级名 */}
                            <div className="class-item">
                                <span className="class-title">
                                    <span className="class-title__star">*&nbsp;</span>
                                    班级名
                                </span>
                                <input type="text" className="class-input" pattern="[^_%]{1,20}" 
                                       title="限20个字符，不支持输入_和%" placeholder="请输入班级名字，限20个字符，不支持输入_和%" required 
                                       ref={input => this.classNameInput = input} />
                            </div>
                            {/* 类型 */}
                            <div className="class-item">
                                <span className="class-title">类型</span>
                                <label><input type="radio" className="class-radio" name="type" value="行政班" onChange={this.handleTypeChange}/>行政班</label>
                                <label><input type="radio" className="class-radio" name="type" value="教学班" onChange={this.handleTypeChange} />教学班</label>
                            </div>
                            {/* 退出权限设置 */}
                            <div className="class-item">
                                <span className="class-title">退出权限设置</span>
                                <label><input type="radio" className="class-radio" name="permission" value="允许退出" onChange={this.handlePermissionChange} />允许退出</label>
                                <label><input type="radio" className="class-radio" name="permission" value="通过班级管理审核后退出" onChange={this.handlePermissionChange} />通过班级管理审核后退出</label>
                                <label><input type="radio" className="class-radio" name="permission" value="禁止退出" onChange={this.handlePermissionChange} />禁止退出</label>
                            </div>
                            <div className="class-item-button">
                                <input type="submit" className="main-hd__bn" value="保存"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}