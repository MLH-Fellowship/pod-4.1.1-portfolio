const githubAPI = "https://api.github.com/graphql";

const PAT = "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";

const variables = {
    name: "covaccinate",
    owner: "Saurav-Shrivastav",
    branch: "main",
    today: new Date().toISOString()
};

const query = `
query CommitCount($name: String!, $owner: String!, $branch: String!, $today: GitTimestamp!) {
    repository(name: $name, owner: $owner) {
        ref(qualifiedName: $branch) {
            target {
                ...on Commit {
                    history(until: $today) {
                        totalCount
                        edges {
                            node {
                                author {
                                    user {
                                        login
                                        avatarUrl
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

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

    console.log(res.data.repository.ref.target.history.edges.map(edge => ({
        username: edge.node.author.user.login,
        avatarURL: edge.node.author.user.avatarUrl
    })))

    return {
        total: res.data.repository.ref.target.history.totalCount,
        commitHistory: res.data.repository.ref.target.history.edges.map(edge => ({
            username: edge.node.author.user.login,
            avatarURL: edge.node.author.user.avatarUrl
        }))
    }
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

    console.log({usernameAndAvatar, usernameAndCount})

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
}

window.addEventListener("load", async() => {
    const apiResponse = await fetchCommits();
    const sortedCommitHistory = countAndSortCommits(apiResponse.commitHistory);
    console.log(sortedCommitHistory);
});
