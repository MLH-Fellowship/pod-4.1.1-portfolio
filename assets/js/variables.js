const githubAPI = "https://api.github.com/graphql";

const variables = {
    name: "pod-4.1.1-portfolio",
    owner: "MLH-Fellowship",
    branch: "main",
    today: new Date().toISOString(),
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
