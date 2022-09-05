import React from 'react'
import Proizvod from "./Proizvod";


function Proizvodi(){

    const proizvodi=[
        {   title:"Collagen+C super 60 tableta",
            body:'Super Collagen+C je proizvod namenjen odraslim osobama preko 18 godina starosti kod kojih je potrebno obnoviti oštećene zglobove, hrskavicu, ligamente, tetive, kosti i mišiće. Aktivne supstance su kolagen i vitamin C pa se ovaj preparat koristi kod bolova u mišićima i zglobovima, nakon povreda, preloma i operacija. Povoljno deluje i na kožu, nokte, kosu, zube i jača i daje elastičnost krvnim sudovima, pa se koristi i za brži oporavak nakon operacija i preloma, za regeneraciju kože i kod varikoznih vena.',
            price:"1 527,99 ",
            imgUrl:"https://shop.benu.rs/data/images/img-medium-product/3/1293.jpg"
        },
        {title:"Terranova B kompleks sa vitaminom C 50 kapsula",
        body:'Terranova vitamin B kompleks sa vitaminom C smanjuje umor i iscrpljenost, doprinosi normalnoj psihičkoj i mentalnoj funkciji, utiče na delovanje nervnog sistema, povoljno deluje na imunitet i smanjuje stres.',
        price:"1 196,07",
        imgUrl:"https://shop.benu.rs/terranova-b-kompleks-sa-vitaminom-c"

        }
    ]
        
    
    return (
        <div className="proizvodi">
      {proizvodi.map((proizvod, index) => (
        <Proizvod key={index} index={index} proizvod={proizvod} />
      ))}
    </div>
    )

}
export default Proizvodi;

