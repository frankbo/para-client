import * as React from 'react';
import { Button } from 'react-bootstrap';
import { EmailField } from './EmailField';

export class App extends React.Component<{}, {}> {
  render() {
    return (
        <div className='app'>
          <form>
            <EmailField label='Your Email'/>
            <Button bsStyle='primary'>Submit</Button>
          </form>
        </div>
    );
  }
}

