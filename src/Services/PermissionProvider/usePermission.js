import {useContext, useState} from 'react';
import PermissionContext from "./PermissionContext";

const usePermission = (permission: any) => {
    const [allowed, setAllowed] = useState<boolean>();

    const {isAllowedTo} = useContext(PermissionContext);

    isAllowedTo(permission).then((allowed) => {
        setAllowed(allowed);
    })
    return [allowed]
}

export default usePermission;
