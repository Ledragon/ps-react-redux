import * as React from 'react';

export interface AppPropTypes {
    children: Array<any>;
}

class App extends React.Component<AppPropTypes>{
    render() {
        return (
            <div className="container-fluid">
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

export default App;