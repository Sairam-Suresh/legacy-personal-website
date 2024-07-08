import React from 'react';

interface ContainerProps {
    topPadding?: boolean
    children: React.ReactNode
}

function Container(props: ContainerProps) {
    return (
        <div className={"space-y-2"}>
            {(props.topPadding ?? true) ? <div className={"pt-5"}>{props.children}</div> : props.children}
        </div>
    );
}

export default Container;