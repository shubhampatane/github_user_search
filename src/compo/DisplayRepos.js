import React, { Component } from 'react';

class DisplayRepos extends Component{
    
    render(){
        let arrData = this.props.data_rep
        const listItems = arrData.map(items => {
            return(
            <div>
                {/* <h1>{items.name}</h1><br /> */}
                <center>
                <table>
                <tbody>
                <tr>
                    <th>
                        <label>Repo Name</label>
                    </th>
                    <th>
                        {items.name}
                    </th>
                </tr>
                <tr>
                    <th>
                        <label>Description</label>
                    </th>
                    <th>
                        {items.description}
                    </th>
                </tr>
                <tr>
                    <th>
                        Language
                    </th>
                    <th>
                        {items.language}
                    </th>
                </tr>
                <tr>
                    <th>
                        <label>Repo Url</label>
                    </th>
                    <th>
                        <a href ={items.owner.html_url} target = "_blank">{items.owner.html_url}</a>
                    </th>
                </tr>
                <tr>
                    <th>
                        Size
                    </th>
                    <th>
                        {items.size}
                    </th>
                </tr>
                <tr>
                    <th>
                        <label>Forks</label>
                    </th>
                    <th>
                        {items.forks}
                    </th>
                </tr>

                <tr>
                    <th>
                        Stars
                    </th>
                    <th>
                        {items.stargazers_count}
                    </th>
                </tr>
                <tr>
                    <th>
                        Watchers
                    </th>
                    <th>
                        {items.watchers_count}
                    </th>
                </tr>
                <tr>
                    <th>
                        Default Branch
                    </th>
                    <th>
                        {items.default_branch}
                    </th>
                </tr>
                </tbody>
            </table></center>
            <br />
            </div>
            )
        });
            console.log(arrData)
        return(
            <div>{listItems}</div>
            
        )
    }
}

export default DisplayRepos;