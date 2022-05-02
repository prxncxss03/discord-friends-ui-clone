import offline from '../../images/offline.png';

export const DirectMessages = () => {
    return (
        <div>
            <DirectMessagesPersons gender="male" alt="male avatar" text="Mario"/>
        </div>
    )

}

const DirectMessagesPersons = ({gender, alt, text}) => {
    const avatarName = Math.round(Math.random() * 100);
    return (
        <button className='hover:bg-gray-650 flex justify-between items-center w-full'>
            <div className='flex justify-center items-center'>
                <div className="profile relative">
                    <div className="avatar-wrapper w-8 h-8 flex justify-center bg-white rounded-full">
                        <img className = "w-6" src={`https://avatars.dicebear.com/api/${gender}/${avatarName}.svg`} alt={alt} />
                    </div>
                    <div className="offline-wrapper absolute top-5 left-5 bg-gray-800 rounded-lg w-4 h-4 flex justify-center items-center">
                        <img className="w-10px h-10px" src={offline} alt="offline symbol" />
                    </div>
                </div>
                <span className='ml-3 text-gray-420 text-sm font-semibold'>{text}</span>
            </div>
            <button>
                <svg  aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="#96989D" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
            </button>
        </button>
    )
}