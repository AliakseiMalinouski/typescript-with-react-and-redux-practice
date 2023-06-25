import React, { ReactNode } from 'react';

type BoxT = {
    children: ReactNode
}

export const Box: React.FC<BoxT> = ({children}) => {
    return (
        <>{children}</>
    )
}