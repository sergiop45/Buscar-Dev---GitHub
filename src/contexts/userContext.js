import { createContext, useContext, useState} from 'react';
import api from '../service/api';

const UserContext = createContext({});

export function UserProvider({ children }) {

    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [blog, setBlog] = useState('');
    const [company, setCompany] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [linkProfile, setLinkProfile] = useState('');
    const [name, setName] = useState('');
    const [local, setLocal] = useState('');
    const [repos, setRepos] = useState('');
    const [twitter, setTwitter] = useState('');
    const [username, setUsername] = useState('');

    function searchUser(name) {

        api.get('/users/' + name)
        .then(dados => {

            const { data } = dados;
            console.log(data)
            console.log(data.bio)
            setAvatar(data.avatar_url);
            setBio(data.bio);
            setBlog(data.blog);
            setCompany(data.company);
            setCreatedAt(data.created_at);
            setFollowers(data.followers);
            setFollowing(data.following);
            setLinkProfile(data.html_url);
            setName(data.name);
            setLocal(data.location);
            setRepos(data.public_repos);
            setTwitter(data.twitter);
            setUsername(data.login);

        })
        .catch(err => console.log('erro: ' + err)) 
  
      }

    return (
        <UserContext.Provider 
        value={ { searchUser, 
            avatar, bio, blog, company,
            createdAt, followers, following,
            linkProfile, name, local,
            repos, twitter, username
         } }>
            { children }
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    return context;
}