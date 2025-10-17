import React from 'react'
import { CardComponent } from './card'
import { Url } from 'url'

const Grid = ({altText, title, desc, imgUrl}:{altText:string,desc?:string, title:string, imgUrl:any}) => {
    return (
        <div className='flex-shrink-0 w-20 sm:w-30 md:w-50'>
            <CardComponent altText={altText} title={title} desc={desc} imgUrl={imgUrl} />
        </div>
    )
}

export default Grid