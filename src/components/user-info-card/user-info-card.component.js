import React, {Component} from 'react';

class UserInfoCard extends Component {

    render(){
        const user = this.props.user;
        if(!user){ return null; }
        return (
            <div className="user-card">
                <h3 className="user-card__username">{user.name}</h3>
                <p className="user-card__location-company">{user.location} | {user.company}</p>
                <div className="user-card__info">
                    <img alt={`A profile set by ${user.login}`} src={user.avatar_url }/>
                    <p>{user.bio}</p>
                </div>
                <dl className="stats">
                    <dt>Public repos:</dt>
                    <dd>{user.public_repos}</dd>

                    <dt>Followers:</dt>
                    <dd>{user.followers}</dd>
                </dl>
                <a className="button" href={user.html_url}>View full profile</a>
            </div>
        )

    }
}

export default UserInfoCard;