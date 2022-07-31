import React from 'react'
import CustomSelect from '../../atoms/CustomSelect'
import { MobileFooterContainer } from './mobileFooter.style'

export default function MobileFooter() {
    const footerList = [
        {
            title: "About Us",
            content: "About Us"
        },
        {
            title: "DEPARMENTS",
            content: "DEPARMENTS"
        },
        {
            title: "HELP",
            content: "HELP"
        },
        {
            title: "DEPARTMENTS",
            content: "DEPARTMENTS"
        },
        {
            title: "SOCIAL",
            content: "SOCIAL"
        }
    ]
  return (
    <MobileFooterContainer>
        {footerList.map((item, index) => {
            return(
                <CustomSelect key={index} content={item.content} title={item.title}/>
            )
        })}
    </MobileFooterContainer>
  )
}
