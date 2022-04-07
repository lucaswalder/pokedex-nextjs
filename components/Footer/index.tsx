import { FooterContent } from "./style"
import Image from "next/image"

import codeboost from '@/assets/codeboost.svg'

export const Footer: React.FC = () => {
    return(
        <FooterContent>
            <div className="container">
                <div className="copy">
                    <span>Módulo JavaScript</span>
                    <p>Consumindo e exibindo dados de uma API</p>
                </div>
                <Image src={codeboost} quality={100} alt='Logo Codeboost' title='Logo do Curso Codeboost na cor branca' />
            </div>
        </FooterContent>
    )
}