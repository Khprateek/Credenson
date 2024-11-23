import './CategoryList.scss'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () =>{
    return(
        <div className="categoryitems">
            <div className="categorylist">
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/Homepages/tittan1.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/Homepages/tittan1.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/Homepages/tittan1.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/Homepages/tittan1.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/Homepages/tittan1.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className="catlistlink">
                <div className="categoryimg">
                    <Image src="/Images/Homepages/tittan1.png" alt="categoryImage" fill sizes='20vw' className='categoryImage'/>
                </div>
                <h1 className='CategoryName'>Category Name</h1>
                </Link>
            </div>
        </div>
    )
}
export default CategoryList