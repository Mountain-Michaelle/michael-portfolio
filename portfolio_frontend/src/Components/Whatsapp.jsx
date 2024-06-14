import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


const Whatsapp = () => {
    return(
        <div className='whatsapp' style={{color:'black'}}>
            <FloatingWhatsApp
            phoneNumber='+23409156084052'
            chatMessage="Welcome! How can we help you today? 🌟"
            accountName='MT.M'
            allowEsc
            allowClickAway
            notification
            notificationSound
            />
        </div>
    )
}

export default Whatsapp;