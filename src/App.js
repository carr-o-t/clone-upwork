import React from "react";
import Loading from "./components/Loading";
// import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";

const Landingpage = React.lazy(() => import('./components/Landingpage'))

function App() {
  return (
    <div className="App">
      <Navbar />
      <React.Suspense fallback={<Loading />}>
        <Landingpage />
      </React.Suspense>
    </div>
  );
}

export default App;
