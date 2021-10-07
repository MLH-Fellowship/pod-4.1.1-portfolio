window.addEventListener("load", async () => {
    populateRepoLink();
    
    const apiResponse = await fetchCommits();
    
    populateCommitSpan(apiResponse.total);
    const sortedCommitHistory = countAndSortCommits(apiResponse.commitHistory);

    makeStatsList(sortedCommitHistory);
});
