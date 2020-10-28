import React from 'react';

export default function UserCard(props) {

    const { login, avatar_url, url, name } = props.data;

    return (
        <div>
            <div className='sidebar'>
                <img src={avatar_url} alt='avatar' />
                <h4>{name}</h4>
                <p>{login}</p>
            </div>
            This is UserCard
            
            {avatar_url}
        </div>
    )
}