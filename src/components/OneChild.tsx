import React, {ReactChild} from "react";

interface OneChildT {
    children: ReactChild
}

export const OneChild: React.FC<OneChildT> = ({children}) => {
    return <>{children}</>
}