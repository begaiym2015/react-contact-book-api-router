import React, { Component } from 'react';

import './List.css';

class List extends Component {
    // componentDidUpdate(prevProps){

    // };

    render() {

        // const data = this.props.data
        const data = this.props.contact

        return (
            <div className="list">
                {data.map((user,index) => (
                   <ul className="ul" key={index}>
                        <li className={`contact ${user.status ? 'comleted':''}`}>
                            <div>Name:  {user.name}</div>
                            <div>Surmane:  {user.surname}</div>
                            <div>Phone:  {user.phone}</div>
                            <div>
                            <button className="btn"
                            onClick={() => {this.props.onChange(index,user.id)}}>
                                <img src="https://w7.pngwing.com/pngs/620/331/png-transparent-red-star-five-pointed-star-icon-star-angle-orange-triangle-thumbnail.png"></img>
                            </button>
                            <button className="btn"
                            onClick={() => {this.props.onDelete(user.id)}}>
                                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png"></img>
                            </button>
                            <button className="btn"
                            onClick={}>
                                <img src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Editing-Edit-icon.png"></img>
                            </button>
                            </div>
                        </li>
                   
                    </ul>
                ))}
              
            </div>
            
        );
    }
}

export default List;