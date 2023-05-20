import Image from 'next/image'
import Layout from '@components/Layout'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAccount, useContractRead } from "wagmi"
import { AdminFacet__factory } from '@context/Types'

const Home = () => {
    const [paymentManagers, setPaymentManagers] = useState([])
    
    const { address } = useAccount()

    console.log(address)

    const { data } = useContractRead({
        address: '0x471e8591f720aD2fCc360081a60712F9f6138665',
        abi: AdminFacet__factory.abi,
        //@ts-ignore
        functionName: 'getPaymentManagersByUser',
        args: [address]
    })
    
    console.log(data)

    return (
        <Layout>
            <div>
                <h2 className='text-2xl'>Payment Manager</h2>

                
                <Link href="/create" className='btn btn-primary'>
                    Create one
                </Link>
                <div>

                </div>
            </div>
        </Layout>
    )
}

export default Home