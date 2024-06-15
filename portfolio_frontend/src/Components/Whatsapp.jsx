import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import My from '../Assets/Statics/Images/my.png'


const Whatsapp = () => {
    return(
        <div className='whatsapp' style={{}}>
            <FloatingWhatsApp
            phoneNumber='+23409156084052'
            chatMessage="Welcome! How can we help you today? 🌟"
            statusMessage='De Bees'
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