import React from "react";
import { Grid } from "@chakra-ui/react";
import GithubItem from "./RecentProjectItem";
import { getRepos } from "../../../services/GithubService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";

const RecentProject = () => {
  const { data: repos, isLoading } = useQuery(["getRepos"], getRepos);

  if (isLoading) {
    return <Loading />;
  }
// Sual...?
  // let recentPosts = repos.sort(function (a, b) {
  //   a = new Date(a.created_at);
  //   b = new Date(b.created_at);
  //   return a > b ? -1 : a < b ? 1 : 0;
  // });
  let recentPosts = repos.filter((repo) => {
    if (repo.language === "Python") {
      let repoName = repo.name;
      return repoName
    }
    return false
  }
  );
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {recentPosts.map((repo) => (
        <GithubItem key={repo.id} repo={repo} />
      ))}
    </Grid>
  );

};

export default RecentProject;
