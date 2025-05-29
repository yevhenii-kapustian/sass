'use client'

import Image from "next/image"
import logoGrey from '../../../public/logoGrey.png'
import logoWhite from '../../../public/logoWhite.png'


const LogoGrey = () => {
    return(
        <Image src={logoGrey} alt="logo" style={{width: "100px", height: "auto"}} priority/>
    )
}

const LogoWhite = () => {
    return(
        <Image src={logoWhite} alt="logo" style={{width: "100px", height: "auto"}} priority/>
    )
}

export {LogoGrey, LogoWhite}