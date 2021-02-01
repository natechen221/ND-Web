import React, { Component } from 'react'
import axios from 'axios'

import '../index.css'

export default class all_students extends Component {
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
                            if(item.occupation === '家长'){
                                return(
                                    <div className="course-card" key={index}>
                                        <div className="course-info"></div>
                                        <div className="course-member__tab">{item.type}</div>
                                        <div className="course-member__name">{item.name}</div>
                                    </div>
                                )
                            }
                        }
                    )
                }
            </div>
        )
    }
}