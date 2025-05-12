import { Route, Switch } from 'wouter';
import NotFound from './pages/not-found';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={() => <h1>Home Page</h1>} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
