import Image from 'next/image'
import Layout from '@components/Layout'
import { useState } from 'react'
import { useNetwork, useContractWrite } from "wagmi"
import { PaymentManagerFacet__factory } from '@context/Types'

const Home = () => {
    const [paymentManagers, setPaymentManagers] = useState([])

    const { write, isError, error } = useContractWrite({
        address: '0xA42C4d77d3407ac3448fdF5eB5877371C4371609',
        abi: PaymentManagerFacet__factory.abi,
        functionName: 'createPaymentManager',
    })

    const handleForm = async (e: any) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const name = formData.get('name')
        const token = formData.get('token')
        const treasury = formData.get('treasury')

        console.log(token)

        await write({
            //@ts-ignore
            args: [name, token, treasury],
        });
    }

    return (
        <Layout>
            <div className='space-y-4'>
                <h2 className='text-2xl'>Create your Payment Manager</h2>

                <div className='flex justify-center w-full pt-5'>
                    <form className='w-full max-w-xl p-5 space-y-4 border-2 rounded-xl' onSubmit={handleForm}>
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
                            <input type="text" name='token' placeholder="0x54ef6..."  pattern="0x[a-fA-F0-9]{40}" className="w-full input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Treasury</span>
                            </label>
                            <input type="text" name='treasury' placeholder="0x69ef6..."  pattern="0x[a-fA-F0-9]{40}" className="input input-bordered" required />
                        </div>

                        {(isError && error != null) && (<span className='text-error'>{error.message}</span>)}
                        
                        <button className='btn btn-primary !mt-8'>Create !</button>
                    </form>
                </div>
                

            </div>
        </Layout>
    )
}

export default Home