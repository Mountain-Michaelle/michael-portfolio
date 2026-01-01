import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import My from '../Assets/Statics/Images/my.png'


const Whatsapp = () => {
    return(
        <div className='whatsapp' style={{}}>
            <FloatingWhatsApp
            phoneNumber='+23409156084052'
            chatMessage="Welcome, It's my pleasure hearing from you!🌟"
            statusMessage='De Bees will reply in less than 1hr'
            accountName='Michael Chinemelu'
            allowEsc
            allowClickAway
            notification
            notificationSound
            darkMode='true'
            avatar={My}
            />
        </div>
    )
}

export default Whatsapp;