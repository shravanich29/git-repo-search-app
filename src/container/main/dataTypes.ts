export interface ITableData {
  id: number;
  owner: string;
  repoName: string;
  desc: string;
  stargazers: number;
  openIssues: number;
  watchers: number;
}

export interface IGridComponent {
  loading: boolean;
  repoTableData: Record<string, any>[];
  getReposByUserName: Function;
}
