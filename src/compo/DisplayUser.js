import React, { Component } from 'react';

const DisplayUser = (props) =>{
    const show_reps = false
    const h = props.data.hireable
    let hire = ""
    if(h){
        hire = "Yes"
    }
    else{
        hire = "No"
    }
    return(
        <div>
            <img className = "userImage" src = {props.data.avatar_url} /><br /><br />   
            <center>
            <table>
                <tbody>
                <tr>
                    <th>
                        <label>User Name</label>
                    </th>
                    <th>
                        {props.data.login}
                    </th>
                </tr>
                <tr>
                    <th>
                        <label>Unique ID</label>
                    </th>
                    <th>
                        {props.data.id}
                    </th>
                </tr>
                <tr>
                    <th>
                        <label>Public Repos</label>
                    </th>
                    <th>
                    {props.data.public_repos}
                    </th>
                </tr>
                <tr>
                    <th>
                        User Url
                    </th>
                    <th>
                        <a href = {props.data.html_url} target = "_blank">{props.data.html_url}</a>
                    </th>
                </tr>
                <tr>
                    <th>
                        Company
                    </th>
                    <th>
                        {props.data.company}
                    </th>
                </tr>
                <tr>
                    <th>
                        Hireable
                    </th>
                    <th>
                        {hire}
                    </th>
                </tr>
                <tr>
                    <th>
                        Followers
                    </th>
                    <th>
                        {props.data.followers}
                    </th>
                </tr>
                <tr>
                    <th>
                        Following
                    </th>
                    <th>
                        {props.data.following}
                    </th>
                </tr>
                </tbody>
            </table></center>
            <br />

            
            
        </div>
    )
}

export default DisplayUser;