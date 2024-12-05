import Image from 'next/image';
import './listpage.scss';
const listpage = () => {
    return(
        <div className='listpage'>
            <div className="COMPAIGN">
                <div className="COMPAIGN_LEFT">
                    <h1>Grab Upto 50% Off on all products</h1>
                    <button>Shop Now</button>
                </div>
                <div className="COMPAIGN_RIGHT">
                    <Image src="/woman.png" alt="campaign" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}
export default listpage