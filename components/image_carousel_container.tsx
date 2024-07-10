import React from 'react';

interface ImageCarouselContainerProps {
    children: React.ReactNode
}

function ImageCarouselContainer(props: ImageCarouselContainerProps) {
    return (
        <div className={"flex flex-row space-x-2 justify-around overflow-x-scroll"}>
            {props.children}
        </div>
    );
}

export default ImageCarouselContainer;