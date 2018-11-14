class GithubService {

    getUser(username){
        return fetch(`https://api.github.com/users/${username}`, {
            headers: new Headers({
                'User-Agent': 'Immersive Labs Technical Test'
            })
        });
    }
}

export default GithubService;