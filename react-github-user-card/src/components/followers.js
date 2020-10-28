import React from 'react';

export default function Followers(props) {

    const { followers } = props;

    return (
        <div>
            <div>
                {
                    followers.map(follower => {
                        console.log(follower)
                        return <div key={follower.id}>{follower.login}</div>
                    })
                }
            </div>
            
        </div>
    )
}