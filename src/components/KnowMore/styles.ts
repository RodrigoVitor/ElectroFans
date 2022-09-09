import styles from 'styled-components'

export const Container = styles.div`
    color: #808080;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 25px 0;
    border-top: 1px solid #000
`

export const Title = styles.h2``

export const Text = styles.p`
    margin-top:15px;
    line-height:10px;
    font-size:20px;

    @media (max-width:540px){
        line-height:25px;
        padding:0 10px
    }
`

export const Button = styles.button`
    margin-top:25px;
    padding:10px;
    font-size:20px;
    border:none;
    border-radius:15px;
    color:#fff;
    background-color:rgba(0,0,0,.5);
    cursor:pointer;

    &:hover {
        opacity:.7
    }
`