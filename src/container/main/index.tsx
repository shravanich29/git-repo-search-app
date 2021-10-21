import React from "react";
import { connect } from "react-redux";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { Button, LinearProgress, TextField } from "@material-ui/core";

import "./main.css";
import { ITableData, IGridComponent } from "./dataTypes";

const MainComponentFunction = (props: IGridComponent) => {
  const { loading, repoTableData, getReposByUserName } = props;
  const [userName, setUserName] = React.useState("");
  const [pageSize, setPageSize] = React.useState(25);

  /* define grid head columns */
  const columns: GridColDef[] = [
    {
      field: "owner",
      headerName: "Owner",
      flex: 1,
    },
    {
      field: "repoName",
      headerName: "Repository Name",
      flex: 1,
    },
    {
      field: "desc",
      headerName: "Description",
      flex: 2,
    },
    {
      field: "stargazers",
      headerName: "Stargazers",
      flex: 1,
    },
    {
      field: "openIssues",
      headerName: "Open Issues",
      flex: 1,
    },
    {
      field: "watchers",
      headerName: "Watchers",
      flex: 1,
    },
  ];

  /* prepare data to be shown in Grid data matching with Grid head columns */
  const rows: ITableData[] = [];
  repoTableData.forEach((repo: Record<string, any>) => {
    rows.push({
      id: repo.id,
      owner: repo.owner.login,
      repoName: repo.name,
      desc: repo.description !== null ? repo.description : "",
      stargazers: repo.stargazers_count,
      openIssues: repo.open_issues_count,
      watchers: repo.watchers_count,
    });
  });

  /* handler to fetch repos based on username */
  const handleGetRepos = () => {
    getReposByUserName(userName);
  };

  return !loading ? (
    <div className="MainDiv">
      <TextField
        id="userName"
        type="text"
        variant="outlined"
        placeholder="Enter username"
        value={userName}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => setUserName(e.target.value)}
      />
      <Button
        id="searchRepoBtn"
        variant="contained"
        color="primary"
        onClick={() => handleGetRepos()}
        className="DeleteButton"
      >
        Search Repository
      </Button>
      <DataGrid
        rows={rows}
        loading={loading}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
      />
    </div>
  ) : (
    <div className="LinearProgress">
      <div className="LoadingText">Loading........</div>
      <LinearProgress />
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    ...state,
  };
};
export const mapDispatchToProps = (dispatch: any) => {
  return {
    getReposByUserName: (userName: string) =>
      dispatch({ type: "GET_SEARCH_REPOS_BY_USER_NAME", userName: userName }),
  };
};

export const MainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponentFunction);
