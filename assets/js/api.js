const fetchCommits = async() => {
    const response = await fetch(githubAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${PAT}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    const res = await response.json();

    const commitHistory = res.data.repository.ref.target.history.edges.filter(commit => !!(commit.node.author.user))

    return {
        total: res.data.repository.ref.target.history.totalCount,
        commitHistory: commitHistory.map(edge => ({
            username: edge.node.author.user.login,
            avatarURL: edge.node.author.user.avatarUrl
        })),
    };
};

const countAndSortCommits = (commitHistory) => {
    const usernameAndAvatar = {};
    const usernameAndCount = {};

    commitHistory.forEach(({username, avatarURL}) => {
        if(!usernameAndAvatar[username]) {
            usernameAndAvatar[username] = avatarURL;
        };

        if(usernameAndCount[username]) {
            usernameAndCount[username] += 1;
        } else {
            usernameAndCount[username] = 1;
        };
    });

    const resultantArray = [];
    Object.keys(usernameAndCount).forEach(username => {
        resultantArray.push({
            username,
            avatarURL: usernameAndAvatar[username],
            commitCount: usernameAndCount[username]
        });
    });

    resultantArray.sort((a, b) => (b.commitCount - a.commitCount));
    
    return resultantArray;
};
