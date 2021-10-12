window.addEventListener("load", async () => {
    const apiResponse = await fetchCommits();
    const sortedCommitHistory = countAndSortCommits(apiResponse.commitHistory);

    makeStatsList(sortedCommitHistory);
});
