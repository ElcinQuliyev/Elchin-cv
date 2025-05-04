import React from "react";
import { Grid } from "@chakra-ui/react";
import GithubItem from "./GithubItem";
import { getRepos } from "../../../services/GithubService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";

const Github = () => {
  const { data: repos, isLoading } = useQuery(["getRepos"], getRepos);

  if (isLoading) {
    return <Loading />;
  }
  const sliceItems = repos.slice(0, 17);
  return (
    <Grid  templateColumns="repeat(2, 1fr)" gap={4}>
      {sliceItems
        .filter((x) => x.language)
        .map((repo) => (
          <GithubItem key={repo.id} repo={repo} />
        ))}
    </Grid>
  );
};

export default Github;
