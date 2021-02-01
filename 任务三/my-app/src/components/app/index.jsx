import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './index.css'
import all_classes from '../body/all_classes/index'
import create_class from '../body/create_class/index'
import info_class from '../body/info_class/index'

export default class App extends Component {
    render () {
        return(
            <div>
                {/* 头部 */}
                <div className="l-header">
                    <div className="header-list">
                        <div className="header-item">
                            <div className="header-title">
                                <img src='./images/header_logo.png' className="header-title-logo" alt=''></img>
                                <span className="header-title-text">福建省信息教育化统一平台</span>
                                <div className="header-title-block">
                                    <span className="header-title-block___text">网教通</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-item">
                            <div className="header-content">
                                <ul>
                                    <li><a href="###" className="header-content-item">首页</a></li>
                                    <li className="li-on"><a href="###" className="header-content-item">教学管理</a></li>
                                    <li><a href="###" className="header-content-item">学习</a></li>
                                    <li><a href="###" className="header-content-item">资源超市</a></li>
                                    <li><a href="###" className="header-content-item">教育应用</a></li>
                                    <li><a href="###" className="header-content-item">新闻</a></li>
                                    <li><a href="###" className="header-content-item">名校名师</a></li>
                                    <li><a href="###" className="header-new-icon">新功能</a></li>
                                    <li><img src="./images/搜索.png" className="header-search-icon" alt='' /></li>
                                    <li><img src="./images/用户头像.png" className="header-user__picture" alt='' /></li>
                                    <li><span className="header-user__name">Coco</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                {/* 内容 */}
                <div className="l-content">
                    {/* 侧边栏 */}
                    <div className="l-sidebar">
                        <div className="l-sidebar-top">
                            <img src="./images/sidebar-arrow.png" className="sidebar-top__icon" alt=''></img>
                            <span className="sidebar-top__text">个人中心</span>
                            <img src="./images/sidebar-menu.png" className="sidebar-top__icon2" alt=''></img>
                        </div>
                        <div className="l-sidebar-content">
                            <ul className="menu-list">
                                <li>
                                    <img src="./images/其他内容.png" alt='' />
                                    <a href="###" className="menu-item">其他内容</a>
                                </li>
                                <li>
                                    <img src="./images/其他内容2.png" alt='' />
                                    <a href="###" className="menu-item">其他内容</a>
                                </li>
                                <li className="ui-on">
                                    <img src="./images/我的班级.png" alt='' />
                                    <a href="###" className="menu-item">我的班级</a>
                                </li>
                                <li>
                                    <img src="./images/其他内容3.png" alt='' />
                                    <a href="###" className="menu-item">其他内容</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-main">
                        <Switch>
                            <Route path="/all_classes" component={all_classes}/>
                            <Route path="/create_class" component={create_class}/>
                            <Route path="/info_class/:type/:id" component={info_class}/>
                            <Route path="/info_class/search_result" component={info_class}/>
                            <Redirect to='/all_classes' />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}