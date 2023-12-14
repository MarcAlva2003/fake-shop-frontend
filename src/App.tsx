import { useAppRouter } from "./routes/useAppRouter";

function App() {
  const { publicRouter } = useAppRouter();

  return <>{publicRouter}</>;
}

export default App;
