import React from 'react';

interface CenterProps {
    children: React.ReactNode
}

function Center(props: CenterProps) {
    return (
        <div className={"flex justify-center lg:justify-start"}>
            {props.children}
        </div>
    );
}

export default Center;