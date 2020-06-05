import React, {useEffect} from "react";
import Header from '../Header';
import Menu from '../Menu';
import Factory from '../../img/Factory.jpg';
import Sandwich from '../../img/PB&J.jpg';


function HistoryPage() {

  useEffect( () => {
    document.title = `Peanut Butter Love`;
  })

    return(
      <div className='main-container'>
        <Header title='PEANUT BUTTER LOVE' subtitle='Z miłości do orzechów'/>
        <main>
          <section className='section-about'>
            <div className="row">
              <div className="col-1-of-4">
                <Menu/>
              </div>
              <div className="col-2-of-4">
              <h2 className='heading-secondary'>Jak to było</h2>
                <p className='paragraph'>Firma Peanut Butter Love została założona w 1894 roku 
                                          przez Howarda Daviesa Love'a. Był on jednym z pierwszych producentów
                                          masła orzechowego na świecie i pierwszym w stanie Utah. Recepturę
                                          sporządził wspólnie ze swoim przyjacielem Johnem Harvey'em Kellogiem,
                                          który po jakimś czasie stał się jego największym rywalem.<br></br>
                                          Produkcja rozpoczęła się w marcu 1895 roku w Salt Lake City, lecz z
                                          początku jego mieszkańcy nie posmakowali w tym przysmaku. Uważano,
                                          że jest nijakie, ponieważ nie było ani słodkie, ani słone. Dopiero po
                                          zmianie receptury w 1896 roku masło orzechowe przyjęło się na rynku 
                                          spożywczym i od tego czasu jego popularność rosła.<br></br>
                                          W 1954 roku nastąpił ogromny przełom. Ludzie zaczęli jeść kanapki z
                                          masłem orzechowym i dżemem. Dzięki temu sprzedaż wzrosła
                                          kilkusetkrotnie i firma Peanut Butter Love okazała się być najbardziej
                                          popularnym i najchętniej wybieranym producentem tego frykasu. Wtedy to 
                                          firma stała się znana na całym świecie.<br></br>
                                          Do dziś w jej zarządzie zasiadają członkowie rodziny Love, którzy nadal 
                                          ukrywają sekretną recepturę w rodzinnym skarbcu.</p>
              </div>
              <div className="col-1-of-4">
                <div className='photo-container'>
                  <img className='photo' id='factory' src={Factory} alt='Fabryka'></img>
                  <img className='photo' id='sandwich' src={Sandwich} alt='Kanapka'></img>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  
}

export default HistoryPage;