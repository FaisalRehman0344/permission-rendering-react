import React from 'react';
import usePermission from "./usePermission";

// This component is meant to be used everywhere a restriction based on user permission is needed
const Restricted = ({to, children}) => {

    // We "connect" to the provider thanks to the PermissionContext
    const [allowed] = usePermission(to);

    // If the user has that permission, render the children
    if(allowed){
        return <>{children}</>;
    }

    // Otherwise, render the fallback
    return <>
    </>;
};

export default Restricted;
