import React from 'react';

import ons from 'onsenui';
import Ons from 'react-onsenui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.index = 0;
        
    }
    
    renderToolbar(route, navigator) {
        const backButton = route.hasBackButton
            ? <Ons.BackButton onClick={this.handleClick.bind(this, navigator)}>Back</Ons.BackButton>
            : null;
    
        return (
            <Ons.Toolbar>
                <div className='left'>{backButton}</div>
                <div className='center'>{route.title}</div>
            </Ons.Toolbar>
        );
    }
    
    handleClick(navigator) {
        ons.notification.confirm('Do you really want to go back?')
            .then((response) => {
                if (response === 1) {
                    navigator.popPage();
                }
            }
        );
    }

    pushPage(navigator) {
        navigator.pushPage({
            title: `Another page ${this.index}`,
            hasBackButton: true
        });
        this.index++;
    }
    
    renderPage(route, navigator) {
        return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
            <section style={{margin: '16px', textAlign: 'center'}}>
              <Ons.Button onClick={this.pushPage.bind(this, navigator)}>
                Push Page
              </Ons.Button>
            </section>
          </Ons.Page>
        );
    }
    
    render() {
        return (
            <Ons.Navigator renderPage={this.renderPage.bind(this)} initialRoute={{title: 'First page', hasBackButton: false}} />
        );
    }
}

export default App;
