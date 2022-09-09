import * as C from './styles'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
export const Footer = () => {
    return (
        <C.Container>
            <C.Box>
                <C.Link href="https://www.linkedin.com/in/rodrigo-vitor-4b59b7203/" target="_blank">
                    <C.Icon src={linkedin} alt="Linkedin icone"/>
                </C.Link>
                <C.Link href="https://github.com/RodrigoVitor/ElectroFans" target="_blank">
                    <C.Icon src={github} alt="Github icone" />
                </C.Link>
            </C.Box>
            <C.Text>@ 2022 <C.Link href="https://github.com/RodrigoVitor" target="_blank">Rodrigo Vitor</C.Link></C.Text>
        </C.Container>
    )
}