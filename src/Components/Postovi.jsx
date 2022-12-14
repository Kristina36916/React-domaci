import React from 'react'
import Post from "./Post";

function Postovi() {
  const blogPosts = [
    {
      title: "Hodanje ili trčanje – kako odabrati pravu fizičku aktivnost?",
      body: `Svi znaju da je vežbanje dobro za telo i um. Redovno vežbanje sa sobom donosi čitav niz prednosti,
       od izgradnje mišića do sprčavanja srčanih bolesti.Bitno je samo odabrati oblik vežbanja koji odgovara vašim 
       potrebama i sklonostima, a dva najjednostavnija i veoma popularna oblika fizičke aktivnosti su hodanje i trčanje.
       Ako niste sigurni koju da odaberete, možda će vam pomoći prednosti i nedostaci i jedne i druge aktivnosti.`,
      author: "Zadovoljna.hr ",
      imgUrl:
        "https://rs.n1info.com/wp-content/uploads/2021/07/shutterstock_218997220.jpg",
    },
    {
      title: "Sezona ambrozije u jeku – saveti kako da se lakše izborimo sa alergijom ",
      body: `Alergije su prisutne u svim starosnim strukturama, od najmlađih do najstarijih i rastu iz godine u godinu.
      One predstavljaju poremećaj u funkcionisanju imunološkog sistema i njegovu burnu reakciju kao odgovor na izloženost
       uobičajenim supstancama, hrani ili drugim agensima, koji kod većine ljudi ne izazivaju reakciju.`,
      author: "Bojana Jakovljević",
      imgUrl:
        "https://rs.n1info.com/wp-content/uploads/2022/09/02/1662109139-shutterstock_1167016981-900x600.jpg",
    },
    {
      title: "Nedostatak vitamina B12: Znak upozorenja može da se pojavi kada se probudite",
      body: `Vitamini i minerali imaju značajnu ulogu u održavanju nivoa energije i smanjenju rizika od raznih bolesti. Učestvuju
       u nekoliko telesnih funkcija poput pomaganja u borbi protiv infekcija, jačanja kostiju, brzog zarastanja rana i regulisanju 
       hormona.Međutim, nedostatak bilo kog esencijalnog vitamina ili minerala može da poremeti funkcionisanje našeg tela i 
       prouzrokovati nekoliko zdravstvenih problema. `,
      author: "Times of India, N1 Zagreb",
      imgUrl:
        "https://rs.n1info.com/wp-content/uploads/2021/04/shutterstock_1285836277.jpg",
    },
    {
      title: "Najčešće zablude o Alchajmerovoj bolesti",
      body: `Septembar je Svetski mesec Alchajmerove bolesti, i ima za cilj da podigne svest 
      i preispitivanje stigme oko Alchajmerove bolesti i demencije.Kerolajn Skejts, zamenica 
      direktora razvoja „Admiral Nurse“ u „Dementia UK“, ističe, pre svega, da Alchajmerova bolest
       i demencija nisu iste stvari.`, 
      author: "index.hr",
      imgUrl:
        "https://rs.n1info.com/wp-content/uploads/2022/01/21/1642804583-shutterstock_228533539-900x600.jpg",
    },
  ];
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  )
}

export default Postovi