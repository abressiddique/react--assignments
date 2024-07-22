export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, name, login, created_at } = user;
    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="user" />
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>
                    User joined on{" "}
                    {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                        month: "short",
                    })} ${createdDate.getFullYear()}`}
                </p>
            </div>
            <div><p>public repos</p>
            <p>{public_repos}</p></div>
            <div>
                <p>followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>following</p>
                <p>{following}</p>
            </div>
        </div>
    );
}
