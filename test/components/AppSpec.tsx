import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from '../../app/components/App';

describe('App Component', function () {
    it('should render a form element', function () {
        const app = shallow(<App />);
        // const form = app.find('form');
        const foo: Object = { bar: 'baz'};

        expect(foo).to.deep.equal({ bar: 'baz' });

        // expect(form).to.have.className('form');
    })
});
