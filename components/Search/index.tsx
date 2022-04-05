import Image from "next/image"
import { SearchContent } from "./style"

import searchIcon from '@/assets/icon-search.svg'

export const Search:React.FC = () => {
    return(
        <SearchContent>
            <div className="container">
                <h2>Select your Pokémon</h2>
                <div className="input-box">
                    <input type="text" placeholder="Search name or code"/>
                    <div className="icon">
                        <Image src={searchIcon} alt='search icon' title="Search name or code" />
                    </div>
                </div>
            </div>
        </SearchContent>
    )
}