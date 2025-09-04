import { BrowserRouter as Router } from "react-router-dom";
import StateProvider from "./Context/StateProvider";
import AppContent from "./AppContent";


function App() {




  return (
    <>
     <Router>
      <StateProvider>
        <AppContent />
      </StateProvider>
    </Router>
    </>
  )
}

export default App
