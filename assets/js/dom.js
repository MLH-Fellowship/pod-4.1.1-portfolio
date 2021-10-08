const makeStatsListItem = (rank, node) => {
    const card = document.createElement("div");
    card.className = "card";

    const innerCont = document.createElement("div");
    innerCont.className = "user-profile";

    const rankP = document.createElement("p");
    rankP.textContent = `#${rank}`
    rankP.className = "rank";

    const userContainerD = document.createElement('div');
    userContainerD.className = "user-container";

    const avatarI = document.createElement("img");
    avatarI.src = node.avatarURL;
    avatarI.className = "avatar";

    const userNameA = document.createElement("a");
    userNameA.textContent = node.username;
    userNameA.href = `https://github.com/${node.username}`;

    userContainerD.append(avatarI, userNameA);
    innerCont.append(rankP, userContainerD);
    card.appendChild(innerCont);

    return card;
};

const makeStatsList = (sortedCommitHistory) => {
    const parentDiv = document.getElementById("stats-list");
    
    sortedCommitHistory.forEach((item, index) => {
        parentDiv.appendChild(makeStatsListItem(index + 1, item))
    });
};