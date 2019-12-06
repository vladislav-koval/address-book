import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    this.children,
                    document.getElementById('portal')
                )}
            </Fragment>
        );

    }
}

export default Portal;