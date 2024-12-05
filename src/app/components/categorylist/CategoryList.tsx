import './CategoryList.scss'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () =>{
    return(
        <div className="categoryitems">
            <div className="categorylist">
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/categories/BLUELock.jpg" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>BLUE LOCK</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/categories/MHA.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>My Hero Academia</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/categories/AOT.jpg" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Attack on Titan</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/categories/NARUTO.jpg" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>NARUTO</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/categories/JUJUTSU.jpg" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>JUJUTSU KAISEN</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/categories/ONEPIECE.jpg" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>One Piece</h1>
                </Link>
            </div>
        </div>
    )
}
export default CategoryList