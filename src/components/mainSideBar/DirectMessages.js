import offline from '../../images/offline.png';

import { Tooltipp } from '../Tooltipp';
import { PersonsAttributes } from './PersonsAttributes';
import { useState } from 'react';

export const DirectMessages = () => {
    
    const [person, setPerson] = useState(PersonsAttributes);
    let handleRemovePerson = (index) => {
        const newPerson = person;
        newPerson.splice(index,1);
        setPerson([...newPerson]);
    }
    return (
        <div className='mx-2'>
            <DirectMessagesline>
            </DirectMessagesline>
            {person.map((personI,index) => {

                const avatarName = Math.round(Math.random() * 100);
                return (
                    <span  key={personI.id} className='cursor-pointer hover:bg-gray-650 p-2 ease-in-out rounded-md flex justify-between items-center w-full group '>
                        
                        <div className='flex justify-center items-center'>
                            <div className="profile relative z-0">
                                <img src={personI.src} alt={personI.alt} className="avatar-wrapper w-8 h-8 flex justify-center rounded-full">
                                   
                                </img>
                                <Tooltipp tooltipTitle='offline' tooltipPlacement='top' tooltipChild={
                                    
                                    <div className="offline-wrapper absolute top-5 left-5 bg-gray-800 rounded-lg w-4 h-4 flex justify-center items-center">
                                        <img className="w-10px h-10px" src={offline} alt="offline symbol" />
                                    </div>
                                    
                                }/>  
                                
                            </div>
                            <span className='ml-3 group-hover:text-gray-400 text-gray-420 text-sm font-semibold'>{personI.text}</span>
                        </div>
                        
                        <button  onClick={()=> handleRemovePerson(index)} datatest= {personI.id} className='mr-1 hidden group-hover:flex '>
                            <svg  name="svg-name" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="#96989D" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                        </button>
                    </span>
                )
            }
            )}
            {/* <Tooltip tooltipText={'Create DM'} /> */}
        </div>
    )

}

const DirectMessagesline = () => {
    return (
        <div className='text-gray-420 mx-3 mt-3 flex justify-between items-center'>
            <span className='text-xs hover:text-gray-400'>DIRECT MESSAGES</span>
            <Tooltipp tooltipTitle='Create DM' tooltipPlacement='top' tooltipChild={
                <div>
                    <button   className='text-xl text-gray-400 relative'>+</button>
                </div>
            }/>   
            
        </div>
    )
}