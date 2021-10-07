const populateRepoLink = () => {
    const repoLink = document.getElementById("target-repo-link");
    repoLink.href = `https://github.com/${variables.owner}/${variables.name}`;
    repoLink.textContent = `${variables.owner}/${variables.name}`;
};

const populateCommitSpan = (total) => {
    const totalCommitSpan = document.getElementById("total-commit-count");
    totalCommitSpan.textContent = total;
};

const makeStatsListItem = (index, node) => {
    const linkTag = document.createElement("a");
    linkTag.className = "link";
    linkTag.href = `https://github.com/${node.username}`;

    const listItem = document.createElement("div");
    listItem.className = "stats-list-item";

    const serialNo = document.createElement("span");
    serialNo.className = "serial-no";
    serialNo.textContent = `#${index}`;

    const avatarImg = document.createElement("img");
    avatarImg.className = "avatar";
    avatarImg.src = node.avatarURL;

    const username = document.createElement("span");
    username.className = "username";
    username.textContent = node.username;

    listItem.append(serialNo, avatarImg, username);
    linkTag.appendChild(listItem);

    return linkTag;
};

const makeStatsList = (sortedCommitHistory) => {
    const parentDiv = document.getElementById("stats-list");
    
    sortedCommitHistory.forEach((item, index) => {
        parentDiv.appendChild(makeStatsListItem(index + 1, item))
    });
};