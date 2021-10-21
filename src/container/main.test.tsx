import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MainComponent, mapDispatchToProps } from "../container/main";
import { Provider } from "react-redux";
import { store } from "../configure-store";

const repoTableData: Record<string, any>[] = [
  {
    id: 163880832,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjM4ODA4MzI=",
    name: "docker-overpass-api",
    full_name: "Mojambo/docker-overpass-api",
    private: false,
    owner: {
      login: "Mojambo",
      id: 13571497,
      node_id: "MDQ6VXNlcjEzNTcxNDk3",
      avatar_url: "https://avatars.githubusercontent.com/u/13571497?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Mojambo",
      html_url: "https://github.com/Mojambo",
      followers_url: "https://api.github.com/users/Mojambo/followers",
      following_url:
        "https://api.github.com/users/Mojambo/following{/other_user}",
      gists_url: "https://api.github.com/users/Mojambo/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Mojambo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Mojambo/subscriptions",
      organizations_url: "https://api.github.com/users/Mojambo/orgs",
      repos_url: "https://api.github.com/users/Mojambo/repos",
      events_url: "https://api.github.com/users/Mojambo/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Mojambo/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Mojambo/docker-overpass-api",
    description:
      "A fully working overpass-api docker image: cloning, replication, areas and www interface",
    fork: true,
    url: "https://api.github.com/repos/Mojambo/docker-overpass-api",
    forks_url: "https://api.github.com/repos/Mojambo/docker-overpass-api/forks",
    keys_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Mojambo/docker-overpass-api/teams",
    hooks_url: "https://api.github.com/repos/Mojambo/docker-overpass-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/events",
    assignees_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/branches{/branch}",
    tags_url: "https://api.github.com/repos/Mojambo/docker-overpass-api/tags",
    blobs_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/languages",
    stargazers_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/subscription",
    commits_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/merges",
    archive_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/downloads",
    issues_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Mojambo/docker-overpass-api/deployments",
    created_at: "2019-01-02T19:26:14Z",
    updated_at: "2019-01-02T19:26:15Z",
    pushed_at: "2017-11-12T18:15:21Z",
    git_url: "git://github.com/Mojambo/docker-overpass-api.git",
    ssh_url: "git@github.com:Mojambo/docker-overpass-api.git",
    clone_url: "https://github.com/Mojambo/docker-overpass-api.git",
    svn_url: "https://github.com/Mojambo/docker-overpass-api",
    homepage: null,
    size: 18,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Shell",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
];
const getReposByUserName = jest.fn();

describe("Main Component Test Suite", () => {
  afterEach(() => cleanup);
  let wrapper: any;
  beforeEach(
    () =>
      (wrapper = render(
        <Provider store={store}>
          <MainComponent
            loading={false}
            repoTableData={repoTableData}
            getReposByUserName={getReposByUserName}
          />
        </Provider>
      ))
  );

  test("Should take a snapshot of Main component", () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should username is empty", () => {
    const { container } = wrapper;
    const text = (container as HTMLElement).querySelector("#userName");
    expect(fireEvent.change(text, { target: { value: "" } }).valueOf()).toEqual(
      true
    );
  });

  test("Should check button onclick is performed", () => {
    const { container } = wrapper;
    const btn = (container as HTMLElement).querySelector("#searchRepoBtn");
    expect(fireEvent.click(btn).valueOf()).toEqual(true);
  });

  test("Should call correct dispatch action to set the username", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getReposByUserName("mojambo");
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: "GET_SEARCH_REPOS_BY_USER_NAME",
      userName: "mojambo",
    });
  });

  it("Should check if saga main is called", async () => {
    const fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(repoTableData) })
    );
    fetch();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
