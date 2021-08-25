import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export const Fav = () => {
    const isFav = true;
    return(
        <> 
            { (isFav) ? <FaStar size={12} color="#000"/> : <FaRegStar size={12} color="#000"/>}
        </>
    );
}