import MainRouters from "./routes/MainRouters";
import Nav from "./pages/Nav";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen text-gray-800">
      <Nav />
      <main className="px-4 md:px-16 py-6">
        <MainRouters />
      </main>
    </div>
  );
}

export default App;
