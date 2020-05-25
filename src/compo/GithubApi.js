import React, { Component } from 'react';
import DisplayUser from "./DisplayUser"
import DisplayRepos from "./DisplayRepos"

class GithubApi extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            datas : {},
            first : true,
            repos : {},
            showrepostate : true,
            listRepos : false
        };

    }

    usernameChangeHandler = (event) => {
        this.setState(
            {username : event.target.value}
        );
        this.setState(
            {showrepostate : true}
        );
        this.setState(
            {datas : {}}
        );
        this.setState(
            {listRepos : false}
        );
    };

    showList = () => {
        this.setState(
            {listRepos : true}
        );
    }
    

    getUser = () => {
        fetch(`https://api.github.com/users/${this.state.username}`)
        .then((response) => response.json())
        .then((data) => {
            
            this.setState(
                {datas : data}
            )
          });
          this.setState(
            {first : false},
        );

        if(1){
            fetch(`https://api.github.com/users/${this.state.username}/repos`)
            .then((response) => response.json())
            .then((data) => {
                this.setState(
                    {repos : data}
                )
            });
        }

        setTimeout(s => {
            if(this.state.datas.public_repos>0){
                    this.setState(
                        {showrepostate : false}
                    );
            }
        }, 1000);

    }

    getRepos = () => {
        if(1){
            fetch(`https://api.github.com/users/${this.state.username}/repos`)
            .then((response) => response.json())
            .then((data) => {
                this.setState(
                    {repos : data}
                )
            });
        }
        
    }

    
    
    

    render() {
        let exists_data = this.state.datas.login
        let exist_user = this.state.username
        let dis = <p></p>
        // if(!this.state.first){
        //     dis = <font color = "red" ><small>Invalid User</small></font>
        // }


        return (
            <div>
                <input type = "text" 
                name = "username"
                placeholder = "Enter Github Username"
                onChange = {this.usernameChangeHandler}
                />

                <center>
                <input type = "button"
                name = "getuser" 
                value = "Search User"
                className="buttonsearch"
                onClick = {this.getUser} /></center>

                {this.state.datas.message === "Not Found" ? <font color = "red" ><small>UserName Not Found</small></font> : null}
                {/* console.log(this.state) */}
                {exists_data ? <DisplayUser data = {this.state.datas}/> : dis}

                <center>
                <input type = "button"
                name = "getrepos" 
                value = "Show Repos"
                className = "button4"
                disabled = {this.state.showrepostate}
                onClick = {this.showList} /></center>
                {this.state.listRepos ? <DisplayRepos data_rep = {this.state.repos}/> : dis}

            </div>
        );
    }
}

export default GithubApi;