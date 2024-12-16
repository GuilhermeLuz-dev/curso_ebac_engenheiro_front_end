document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repositorys = document.querySelector('#number_repositorys')
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')

    fetch('https://api.github.com/users/GuilhermeLuz-dev').then((res) => {
        return res.json();
    }).then(json => {
        console.log(json);
        name.innerHTML = json.name;
        username.innerHTML = json.login;
        repositorys.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        avatar.src = json.avatar_url;
    }).catch(() => {
        throw new Error();
    })
})