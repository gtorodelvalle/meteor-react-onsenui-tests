import { Meteor } from 'meteor/meteor';
import ons from 'onsenui';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../imports/ui/components/App.jsx';

import '../imports/ui/html/main.html';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Meteor.startup(() => {
  ons.ready(() => {
    ReactDOM.render(<App></App>, document.getElementById('app'));
  });
});
