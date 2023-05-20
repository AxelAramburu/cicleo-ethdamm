import Image from 'next/image'
import Layout from '@components/Layout'
import { useState } from 'react'
import Link from 'next/link'

const Home = () => {
    const [paymentManagers, setPaymentManagers] = useState([])

    const getPaymentManagers = async () => {

    }

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