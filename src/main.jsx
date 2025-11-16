import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
  </Provider>,
)
