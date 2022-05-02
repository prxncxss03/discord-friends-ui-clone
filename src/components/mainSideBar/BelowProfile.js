import offline from '../../images/offline.png'
import princesspix from '../../images/princesspix.jpeg';
import mute from '../../images/Mute.png';
import settings from '../../images/Settings.png';
import deafen from '../../images/deafen2.png';

export const BelowProfile = () => {
    return (
        <div className='cursor-pointer bg-gray-950 flex justify-between px-2 py-10px'>
            <LeftBelowProfile src={princesspix} offline={offline} alt="Princess Pangit na Pic" />
            <RightBelowProfile />
        </div>
    )
}

const RightBelowProfileSolo = ({src,alt}) => {
    return (
        <button className='ml-1 rounded-md hover:bg-gray-650 p-1'>
            <img className="object-contain " src={src} alt={alt}></img>
        </button>
    )
}
const RightBelowProfile = () => {
    return (
        <div className='flex justify-center items-center'>
            <RightBelowProfileSolo src={mute} alt={'Mute'}/>
            <RightBelowProfileSolo src={deafen} alt={'Headphone'}/>
            <RightBelowProfileSolo src={settings} alt={'setttings'}/>
        </div>
    )
}


const LeftBelowProfile = ({ alt,src,offline}) => {
    return (
        <div className='flex justify-center items-center'>
            <div className="hover:opacity-80 ease-in-out profile relative z-0">
               
                <img className = "w-8 z-0 rounded-full" src={src} alt={alt} />
                
                <div className="offline-wrapper absolute top-5 left-5 bg-gray-800 rounded-lg w-4 h-4 flex justify-center items-center">
                    <img className="w-10px h-10px" src={offline} alt="offline symbol" />
                </div>
            </div>
            <div className='text-white text-xs ml-2'>
                 <p>herm_p</p>
                 <p className='font-normal text-gray-400'>#3650</p>
            </div>
        </div>
    )
}


