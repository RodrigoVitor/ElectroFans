import * as C from './styles'
import backgroundImage from '../../assets/bg.png'
import Logo from '../../assets/ElectroFans.png'

export const Header = () => {
    return (
        <C.Container bg={backgroundImage}>
            <C.Logo src={Logo} alt=""/>
            <C.Title>Música eletrônica é como uma nova língua, <br /> você tem que aprender a entender.</C.Title>
        </C.Container>
    )
}