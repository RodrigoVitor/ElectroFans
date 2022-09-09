import styles from 'styled-components'

export const Container = styles.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:25px 0;
    background: #777
`

export const Box = styles.div``

export const Icon = styles.img`
    width:40px;
    margin-bottom:25px;
    margin-right:10px;
`

export const Text = styles.p`
    color:white
`

export const Link = styles.a`
    color:white;
    text-decoration:underline;
    font-weight:bold;

    &:hover {
        opacity:.9
    }
`