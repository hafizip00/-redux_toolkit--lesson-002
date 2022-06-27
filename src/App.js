import "./App.css";
import PostsList from "./Features/Post/PostsList";
import PostAddForm from "./Features/Post/PostAddForm";

function App() {
  return (
    <div className="App">
      <PostAddForm />
      <PostsList />
    </div>
  );
}

export default App;
