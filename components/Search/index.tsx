import Image from "next/image"
import { SearchContent } from "./style"

import searchIcon from '@/assets/icon-search.svg'

export const Search:React.FC <{value:any, onChange:any, searchTerm:any} > = ({value, onChange, searchTerm}) => {
    function handleClick(event:any) {
        onChange(event.target.value)
    }
    return(
        <SearchContent>
            <div className="container">
                <h2>Select your Pokémon</h2>
                <div className="input-box">
                    <input type="text" value={value} onChange={handleClick} placeholder="Search name or code"/>
                    <button className="icon" onClick={searchTerm} disabled={value === '' ? true : false}>
                        <Image src={searchIcon} alt='search icon' title="Search name or code" />
                    </button>
                </div>
            </div>
        </SearchContent>
    )
}