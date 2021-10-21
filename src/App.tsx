import "./App.css";
import { MainComponent } from "./container/main";

function App() {
  return (
    <div className="App">
      <MainComponent
        loading={false}
        repoTableData={[]}
        getReposByUserName={() => {}}
      />
    </div>
  );
}

export default App;
