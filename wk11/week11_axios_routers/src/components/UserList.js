import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'; // Import Link here

export default class UserList extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    getUsers = async() => {
        const userUrl = "https://jsonplaceholder.typicode.com/users"
        try {
            const response = await axios.get(userUrl)
            //console.log(response.data)
            this.setState({users: response.data})
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    submitData = async () => {
        try {
        
        await axios.post("https://jsonplaceholder.typicode.com/users", 
            {
                username:"admin",
                password: 'pwd'
             })
             } catch (error) {
            
        }
    }

  render() {
    return (
      <div>
        <h3>User List</h3>
        {
            this.state.users.map(user => (
                <p key={user.id}>
                    <Link to={`/user/${user.id}`} />
                    )
                    
                </p>
            ))
        }
        <button onClick={this.submitData}>Add</button>
      </div>
    )
  }
}