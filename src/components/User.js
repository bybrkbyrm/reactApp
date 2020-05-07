import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                
            <ul>
                <li>İsim: {this.props.isim}</li>
                <li>Departman : {this.props.departman}</li>
                <li>Maaş : {this.props.maas}</li>
            </ul>

            </div>
        )
    }
}
export default  User;