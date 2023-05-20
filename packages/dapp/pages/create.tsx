import Image from 'next/image'
import Layout from '@components/Layout'
import { useState } from 'react'
import { useNetwork, useContractWrite } from "wagmi"

const Home = () => {
    const [paymentManagers, setPaymentManagers] = useState([])

    const handleForm = async (e: any) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const name = formData.get('name')
        const token = formData.get('token')
        const treasury = formData.get('treasury')

        console.log(token)

        const { wait } = useContractWrite({

        })
    }

    return (
        <Layout>
            <div className='space-y-4'>
                <h2 className='text-2xl'>Create your Payment Manager</h2>

                <div className='w-full flex justify-center pt-5'>
                    <form className='max-w-xl w-full space-y-4 border-2 p-5 rounded-xl' onSubmit={handleForm}>
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment Manager Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Company name per exemple" className="input input-bordered" required />
                        </div>

                        <div className="form-control tooltip w-full !max-w-none"  data-tip="This coin will be the coin that you will receive when user pay subscription so we STRONGLY recommand to put a stablecoin">
                            <label className="label">
                                <span className="label-text">Payment token</span>
                            </label>
                            <input type="text" name='token' placeholder="0x54ef6..."  pattern="0x[a-fA-F0-9]{40}" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Treasury</span>
                            </label>
                            <input type="text" name='treasury' placeholder="0x69ef6..."  pattern="0x[a-fA-F0-9]{40}" className="input input-bordered" required />
                        </div>
                        
                        <button className='btn btn-primary !mt-8'>Create !</button>
                    </form>
                </div>
                

            </div>
        </Layout>
    )
}

export default Home