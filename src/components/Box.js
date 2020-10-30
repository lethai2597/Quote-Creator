import {useState} from 'react';

const Box = (props) => {
    const {title, isShowDefault, children} = props
    const [isShow, setIsShow] = useState(isShowDefault || false);
    const toggleShow = () => {
        setIsShow(!isShow)
    }
    return(
        <div className="border-b p-4">
            <h2 className="text-xl flex justify-between items-center cursor-pointer" onClick={toggleShow}>
                {title || 'No Title'} 
                <button className="focus:outline-none p-3">
                    {isShow
                        ?<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z"/></svg>
                        :<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z"/></svg>
                    }
                </button>
            </h2>
            {isShow && <div className="m-4">
              {children || 'No Content'}
            </div>}
        </div>
    )
}

export default Box