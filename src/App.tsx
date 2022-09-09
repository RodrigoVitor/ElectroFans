import { DescriptionFestival } from "./components/DescriptionFestival"
import { Header } from "./components/Header"
import tml from './assets/tml.png'
import edc from './assets/edc.png'
import ufm from './assets/ufm.png'
import { KnowMore } from "./components/KnowMore"
import { Footer } from "./components/Footer"


export const App  = () => {
  const descriptionTml = "Considerado o maior festival de música eletrônica do mundo. Atualmente, o festival é realizado durante 2 finais de semana intensos com muita música, um acampamento super completo que possui até academia. Em 2022 o festival foi realizado pela primeir vez durante 3 semanas."

  const descriptionEdc = "Simplesmente o maior festival de música eletrônica na América do Norte, o Electric Daisy Carnival tem em média mais de 300.000 participantes por edição"

  const descriptionUfm = "Ultra Music é o maior festival dos EUA! Com mais de 20 anos de tradição, o festival é considerado um dos principais da cena EDM, por ser transmitido para o mundo todo e por acontecer dentro da Miami Music Week"

  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <main>
          <DescriptionFestival 
            title="tomorrowland" 
            description={descriptionTml} 
            img={tml}  
            place="Belgica - Cidade de Boom"
            when="Durante os dois últimos finais de semana de Julho"
            website="#"
            titleMain="Conheça 3 Grandes Festivais da Música Eletrônica"
            haveBorder={false}
          />


          <DescriptionFestival 
            title="Electric Daisy Carnival" 
            description={descriptionEdc} 
            img={edc}  
            place="Belgica - Las Vegas"
            when="Durnte 3 dias de maio"
            website="#"
            haveBorder={true}
          />


          <DescriptionFestival 
            title="Ultra Music Festival" 
            description={descriptionUfm} 
            img={ufm}  
            place="USA - Miami"
            when="Durnte 3 dias de maio"
            website="#"
            haveBorder={true}
          />

        </main>
      </section>

      <section>
        <KnowMore />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App