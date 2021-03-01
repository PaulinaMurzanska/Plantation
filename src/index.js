import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap-post-custom.sass';
import './styles/bootstrap-pre-custom.sass';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{Api} from "services/Api";
import axios from 'axios';


axios.defaults.baseURL = Api.baseUrl;


axios.defaults.timeout = Api.timeout;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

