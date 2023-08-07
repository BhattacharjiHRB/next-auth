import React from "react";


type Props = {
    img : string;
    alt?: string;
}

const Avatar = ({img, alt}:Props) => {
    return(
        <div className="rounded-full overflow-hidden w-full pt-full relative">
            <div className="absolute inset-0">
                <img src={img} alt={alt || img} />
            </div>
        </div>
    )
}

export default Avatar