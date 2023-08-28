import * as React from "react"
import "/src/styles/components/cards.scss"

import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from "@fortawesome/free-solid-svg-icons"
import { faCoins } from "@fortawesome/free-solid-svg-icons"

import SingleCard from "./SingleCard"

const Cards = () => {


  return (
    <div className="cards-main-wrap">
      <h1>Cechy Agencji</h1>
      <section className="cards-wrapper">
        <SingleCard icon={faStopwatch} title="Szybkość" index={1}>
          Nasz proces przygotowania jest szybki, a my dynamicznie dopasowujemy kampanię by przyciągnąć jak najwięcej klientów
        </SingleCard>
        <SingleCard icon={faChartLine} title="Gwarantowany Wzrost" index={2}>
          Internet jest obecnie najlepszym miejscem na reklamowanie się. Wejdź na ten rynek i wznieś swoją markę na zupełnie inny poziom
        </SingleCard>
        <SingleCard icon={faCoins} title="Okres Próbny" index={3}>
          Skorzystaj z 2-tygodniowego okresu próbnego, podczas którego zapłacisz tylko minimalne koszty prowadzenia kampanii
        </SingleCard>
      </section>
    </div>

  )
}

export default Cards