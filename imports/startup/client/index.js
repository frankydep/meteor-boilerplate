import React from 'react';
import { render } from 'react-dom';
import App from '../../ui/layouts/App/App';


Meteor.startup(() => render(<App />, document.getElementById('react-root')));
