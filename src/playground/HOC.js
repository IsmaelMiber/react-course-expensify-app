import React from 'react';
import ReactDom from 'react-dom';

// High Order Component (HOC). HOC is a component which render another component.

//Regular Component
const Info = (props) => (
    <div>
        <p>Info: {props.info}</p>
    </div>
);

//Maker of High Order Component(HOC)
const withAdminWarning = (RegularComponent) => (
    (props) => (
        <div>
            { props.isAdmin && <p>This is warning from Admin</p> }
            <RegularComponent {...props} />
        </div>
    )
);

const requireAuthentication = (RegularComponent) => (
    (props) => (
        <div>
            { props.isAuthenticated && <p>This is Authenticated</p>}
            <RegularComponent {...props} />
        </div>
    )
);

//High Order Component(HOC)
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById("app"));

