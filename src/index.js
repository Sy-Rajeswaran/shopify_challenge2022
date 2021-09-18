import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { usePromiseTracker } from "react-promise-tracker"
import Loader from 'react-loader-spinner'
import reportWebVitals from './reportWebVitals';
// Loading indicator to track the promise of the API if promise in progress display the Loader
const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return(
        <div className="loader">
            {
                (promiseInProgress === true) ?
                    <Loader type="Circles" color="#FD0808"/>
                    :
                    null
            }
        </div>

    );

}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
