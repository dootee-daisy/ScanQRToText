import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import "./App.css"
import Main from "./components/layout/Main"
import TextToQrCode from "./pages/TextToQrCode"
import QrCodeToText from "./pages/QrCodeToText"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<TextToQrCode />}></Route>
            <Route
              path='/qrcode-to-text'
              element={<QrCodeToText />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
