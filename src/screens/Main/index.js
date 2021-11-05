import React from 'react'

// Components
import Navbar from '../../components/navbar'
import Banner from '../../components/Banner'
import MainValue from '../../components/Value';
import Domain from '../../components/Domain';
import CTA from '../../components/CTA'
import Footer from '../../components/Footer';
import DetailWeb from '../../components/DetailWeb';
import CustomerSupport from '../../components/CustomerSupport';
import Empty from '../../components/Empty';
import Pricing from '../../components/Pricing';

export default function Main() {
    return (
        <div style={{overflowX:'hidden'}}>
            <Navbar   />
            <Banner />
            <MainValue/>
           
            <Domain/>
            <Pricing />
            <DetailWeb/>
            
            <Empty/>
            <CustomerSupport/>
            <CTA />
           <Footer/>
        </div>
    )
}
