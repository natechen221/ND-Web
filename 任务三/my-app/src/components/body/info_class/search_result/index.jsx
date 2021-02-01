import React, { Component } from 'react'
import '../index.css'

export default class all_teachers extends Component {
    render () {
        const member = this.props.location.state
        
        if(member.occupation === '老师'){
            if(member.type === '班主任'){
                return(
                    <div className="course-card">
                        <div className="course-info-all"></div>
                        <div className="course-member__name">{member.name}</div>
                    </div>
                )
            }
            else if(member.manager === true){
                return(
                    <div className="course-card">
                        <div className="course-info"></div>
                        <div className="course-member__manager">管理员</div>
                        <div className="course-member__tab">{member.type}</div>
                        <div className="course-member__name">{member.name}</div>
                    </div>
                )
            }
            else{
                return(
                    <div className="course-card">
                        <div className="course-info"></div>
                        <div className="course-member__tab">{member.type}</div>
                        <div className="course-member__name">{member.name}</div>
                    </div>
                )
            }
        }
        else if(member.occupation === '学生'){
            return(
                <div className="course-card">
                    <div className="course-info"></div>
                    <div className="course-member__tab">{member.type}</div>
                    <div className="course-member__name">{member.name}</div>
                </div>
            )
        }
        else if(member.occupation === '家长'){
            return(
                <div className="course-card">
                    <div className="course-info"></div>
                    <div className="course-member__tab">{member.type}</div>
                    <div className="course-member__name">{member.name}</div>
                </div>
            )
        }
    }
}