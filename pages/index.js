import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Deals from '../components/Deals'
import Deleivery from '../components/Deleivery'
import Header from '../components/Header'
import login from '../components/Login'
import NewArrival from '../components/NewArrival'
import NewDeals from '../components/NewDeals'
import Section from '../components/Section'
import Trending from '../components/Trending'
import Watch from '../components/Watch'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Footer from '../components/Footer.js'
import Sidebar from '../components/Sidebar'
export default function Home() {
  return (
    <div className=' '>
       <Head>
        <title>Selling Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
<Header />
<Trending />
<NewArrival/>
<NewDeals/>
<Watch/>
<Sidebar />
<Login/>
<Footer/>
{/* <Login/> */}
   {/* <div className='w-20'>
   <Sidebar/>

   </div> */}
{/* 
<div className='bg-[#181821] flex flex-col'>
     <Section/>
</div> */}
    </div>
  )
}
