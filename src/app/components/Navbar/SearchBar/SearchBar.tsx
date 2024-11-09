"use client"
import Image from "next/image"
import './SearchBar.scss';
import { useRouter } from "next/navigation";
const SearchBar = () => {

    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        if(name){
            router.push(`/list?name=${name}`)
        }
    }


    return(
        <form className ="searchbar" action="" onSubmit={handleSearch}>
            <input className="inputbox" type="text" name="name" placeholder="Search" />
            <button className="searchbutton">
                <Image src="/search.png" alt="" width={16} height={16} />
            </button>
        </form>
    )
}
export default SearchBar