/// <reference path='../../typings/index.d.ts'/>

import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { EmailField } from '../../app/components/EmailField/EmailField';

import { App } from '../../app/components/App/App';

describe('App Component', function () {
    it('should render a form element', function () {
        const app = shallow(<App />);
        const form = app.find(EmailField);

        expect(form).to.have.prop('label', 'Your Email');
    })
});
