import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import "./App.css"
import Main from "./components/layout/Main"
import TextToQrCode from "./pages/TextToQrCode"
import QrCodeToText from "./pages/QrCodeToText"
import About from "./pages/About"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<TextToQrCode />} />
            <Route
              path='/qrcode-to-text'
              element={<QrCodeToText />}
            />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
