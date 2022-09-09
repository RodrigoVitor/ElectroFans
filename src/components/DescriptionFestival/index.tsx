import * as C from './styles'

type Props = {
    titleMain?: string,
    title: string,
    img: string,
    description: string,
    place: string,
    when: string,
    website?: string,
    haveBorder: boolean
}

export const DescriptionFestival = ({title, img, description, place, when, website, titleMain, haveBorder}: Props) => {
    return (
        <C.Container haveBorder={haveBorder}>
        <C.Title>{titleMain}</C.Title>
            <C.Festival>
                <C.SubTitle> {title} </C.SubTitle>
                <C.Flex>
                    <C.FestivalImage src={img} />
                    <C.FestivalDescription > 
                        {description}
                        <C.InfoFestival>Onde: {place} </C.InfoFestival>
                        <C.InfoFestival>Quando: {when} </C.InfoFestival>
                        <C.InfoFestival>Site Oficial: <C.Link href={website}>Clique Aqui</C.Link> </C.InfoFestival>
                    </C.FestivalDescription>
                </C.Flex>
            </C.Festival>
        </C.Container>
    )
}