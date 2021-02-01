import React, { Component } from 'react'
import axios from 'axios'

import '../index.css'

export default class all_teachers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/classes')
        .then( (response) => {
            var {id} = this.props.match.params
            var classDetail = response.data.find((c) => c.id === id)
            var members = classDetail.members
            this.setState({members})
        })
    }

    render () {
        return(
            <div>
                {
                    this.state.members.map(
                        // eslint-disable-next-line array-callback-return
                        (item, index) => {
                            if(item.occupation === '老师'){
                                if(item.type === '班主任'){
                                    return(
                                        <div className="course-card" key={index}>
                                            <div className="course-info-all"></div>
                                            <div className="course-member__name">{item.name}</div>
                                        </div>
                                    )
                                }
                                else if(item.manager === true){
                                    return(
                                        <div className="course-card" key={index}>
                                            <div className="course-info"></div>
                                            <div className="course-member__manager">管理员</div>
                                            <div className="course-member__tab">{item.type}</div>
                                            <div className="course-member__name">{item.name}</div>
                                        </div>
                                    )
                                }
                                else{
                                    return(
                                        <div className="course-card" key={index}>
                                            <div className="course-info"></div>
                                            <div className="course-member__tab">{item.type}</div>
                                            <div className="course-member__name">{item.name}</div>
                                        </div>
                                    )
                                }
                            }
                        }
                    )
                }
            </div>
        )
    }
}