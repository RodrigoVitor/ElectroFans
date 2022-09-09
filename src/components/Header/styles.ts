import styles from 'styled-components'
import backgroundImage from '../../assets/bg.png'


type BackgroundProps = {
    bg: string
}

export const Container = styles.div<BackgroundProps>`
    min-height:80vh;
    background-image:url(${props => props.bg});
    background-size:cover;
    opacity:.8;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media (max-width:834px) {
        min-height:50vh
    }

    @media (max-width:540px) {
        padding: 0 30px;
    }
`

export const Logo = styles.img`
    margin-bottom:-200px;
    @media (max-width:540px) {
        width:100vw;
        margin-bottom:-100px;
    }
`

export const Title = styles.h1`
    color: #fff;    
    line-height:30px;

    @media (max-width:428px) {
        font-size:25px;
        padding-bottom:15px
    }
`