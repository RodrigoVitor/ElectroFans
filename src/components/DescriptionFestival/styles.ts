import styles from 'styled-components'

type haveBorder = {
    haveBorder: boolean
}

export const Container = styles.div<haveBorder>`
    padding:25px;
    background-color: #fff;
    border-top: ${props => props.haveBorder ? '1px solid #000' : 'none'}
`

export const Title = styles.h2`
    text-align:center;
    font-size:28px;
    color: #696969
`

export const Festival = styles.div``

export const SubTitle = styles.h3`
    text-align:center;
    margin-top:25px;
    font-size:22px;
    color: #808080;
`

export const Flex = styles.div`
    display:flex;
    justify-content:center;
    gap:25px;
    margin-top:25px;

    @media (max-width:768px) {
        flex-direction:column
    }
`

export const FestivalImage = styles.img`
    transition: all ease 1s;
    &:hover {
        opacity:.7
    }

    @media (max-width:540px) {
        width:90vw
    }
`

export const FestivalDescription = styles.p`
    width:500px;
    font-size:20px;
    line-height:25px;
    color: #778899;
    @media (max-width:540px) {
        width:90vw
    }
`

export const InfoFestival = styles.span`
    display:block;
    font-weight:bold;
`

export const Link = styles.a``