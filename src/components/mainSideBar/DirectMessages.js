import offline from '../../images/offline.png';
// import { Tooltip } from '../Tooltip.js';

export const DirectMessages = () => {
    return (
        <div className='mx-2'>
            <DirectMessagesline>
            </DirectMessagesline>
            {/* <Tooltip tooltipText={'Create DM'} /> */}
            <DirectMessagesPersons gender="male" alt="male avatar" text="iambooo3" onClick={console.log('clicked x')}/>
            <DirectMessagesPersons gender="bottts" alt="bottts" text="SummerXX"/>
            <DirectMessagesPersons gender="initials" alt="avatar" text="sis kaye"/>
            <DirectMessagesPersons gender="identicon" alt="avatar" text="Ate Princess"/>
            <DirectMessagesPersons gender="female" alt="female avatar" text="siang"/>
            <DirectMessagesPersons gender="micah" alt="micah" text="ravenpocon"/>
            <DirectMessagesPersons gender="avataaars" alt="micah" text="Sweas s0ng3rists"/>
        </div>
    )

}

const DirectMessagesPersons = ({gender, alt, text}) => {
    const avatarName = Math.round(Math.random() * 100);
    return (
        <button className='hover:bg-gray-650 p-2 ease-in-out rounded-md flex justify-between items-center w-full group '>
            <div className='flex justify-center items-center'>
                <div className="profile relative z-0">
                    <div className="avatar-wrapper w-8 h-8 flex justify-center bg-white rounded-full">
                        <img className = "w-6 z-0" src={`https://avatars.dicebear.com/api/${gender}/${avatarName}.svg`} alt={alt} />
                    </div>
                    <div className="offline-wrapper absolute top-5 left-5 bg-gray-800 rounded-lg w-4 h-4 flex justify-center items-center">
                        <img className="w-10px h-10px" src={offline} alt="offline symbol" />
                    </div>
                </div>
                <span className='ml-3 group-hover:text-gray-400 text-gray-420 text-sm font-semibold'>{text}</span>
            </div>
            <span className='mr-1'>
                <svg className='opacity-0 group-hover:opacity-100' aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="#96989D" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
            </span>
        </button>
    )
}

const DirectMessagesline = () => {
    return (
        <div className='text-gray-420 mx-3 mt-1 flex justify-between items-center'>
            <span className='text-xs hover:text-gray-400'>DIRECT MESSAGES</span>
            <button className='text-xl text-gray-400 relative'>+</button>
        </div>
    )
}