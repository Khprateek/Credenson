"use client"
import './cartmodal.scss'
import Image from 'next/image'
const CartModal = () =>{


    const cartItems = true


    return (
        <div className="cartmodal">
            {!cartItems ? (
                <div className="emptycart">
                    Cart is empty
                </div>
            ) : (
                <>
                <h2>Shopping Cart</h2>
                <div className="nonemptycart">
                    <div className="items">
                        <Image src="/Images/Homepages/mikasa.png" alt='' width={72} height={96} className='cartitem' />
                            <div className="carttext">
                                {/* TOP */}
                                <div className="top">

                                    <div className="title">
                                        <h3>Product name</h3>
                                        <div className="price">
                                            990
                                        </div>
                                    </div>

                                    <div className="description">
                                        Available
                                    </div>

                                </div>

                                <div className="bottom">
                                    <span className='qt'> Qt. 2</span>
                                    <span className='rem'>remove</span>
                                </div>
                            </div>
                    </div>

                    <div className="items">
                        <Image src="/Images/Homepages/mikasa.png" alt='' width={72} height={96} className='cartitem' />
                            <div className="carttext">
                                {/* TOP */}
                                <div className="top">

                                    <div className="title">
                                        <h3>Product name</h3>
                                        <div className="price">
                                            990
                                        </div>
                                    </div>

                                    <div className="description">
                                        Available
                                    </div>

                                </div>

                                <div className="bottom">
                                    <span className='qt'> Qt. 2</span>
                                    <span className='rem'>remove</span>
                                </div>
                            </div>
                    </div>
                </div>

                {/* // BOTTOM */}
                <div className="bottomdetail">
                    <div className="detail">
                        <span>Subtotal</span>
                        <span>4500</span>
                    </div>
                    <p>
                        detail about the product will be shown here.
                    </p>
                    <div className="button">
                        <button className='btn1'>View Cart</button>
                        <button className='btn2'>Checkout</button>
                    </div>
                </div>
                
                </>)}
        </div>
    )
}
export default CartModal