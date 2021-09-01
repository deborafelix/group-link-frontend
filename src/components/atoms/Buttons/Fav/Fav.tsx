import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

type FavProps = {
    isFav: boolean
}

export const Fav: React.FC<FavProps> = ({isFav}: FavProps) => {
    return(
        <> 
            { (isFav) ? <FaStar size={12} color="#000"/> : <FaRegStar size={12} color="#000"/>}
        </>
    );
}