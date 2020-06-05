import React, { useEffect, useState } from "react";
import Header from '../Header';
import Menu from '../Menu';
import Toggle from '../Toggle';
import Dog from '../../img/DogEatingPB.jpeg';
import Form from '../Form';
import Button from '@material-ui/core/Button';


function ClickMe(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className='paragraph'>Jak bardzo lubisz masło orzechowe: {count}%</p>
      <Button id='toggle-button' variant="outlined" color="secondary" onClick={ () => setCount(count + 1)}>
        Bardziej
      </Button>
    </div>
  )
}


function ManufacturePage() {

    useEffect( () => {
      document.title = `Peanut Butter Love`;
    })
    
    const [story, setStory] = useState(false);


    return(
      <div className='main-container'>
        <Header title='PEANUT BUTTER LOVE' subtitle='Z miłości do orzechów'/>
        <main>
          <section className='section-about'>
            <div className="row">
              <div className="col-1-of-4">
                <Menu/>
              </div>
              <div className="col-3-of-4">
                <h2 className='heading-secondary'>Jak to jest robione</h2>
                {!story && <div>
                  <h3 className='heading-tertiary'>Zanim zaczniemy, mamy kilka pytań</h3>
                  <p className='paragraph'>Czy chcesz zobaczyć kto je nasze masło orzechowe?</p>
                  <Toggle >
                    <img src={Dog} alt="Pies jedzący maslo orzechowe"></img>
                  </Toggle>
                  <p className='paragraph'>Czy chcesz wypełnić krótki formularz?</p>
                  <Toggle>
                    <Form />
                  </Toggle>
                  <ClickMe />
                  <p className='paragraph'>A teraz do roboty
                  <Button id='btn-filled' variant="contained" color="secondary" onClick={() => setStory(true)} >
                    Dalej
                  </Button>
                </p>
                  </div>
                }
                  {story && <div>
                    <p className='paragraph'>Najważaniejsze w całym procesie jest wybranie dobrej jakości orzechów.
                                            Klasycznie do wyrobu masła używa się ozrechów ziemnych, zwanymi również 
                                            fistaszkami. <br></br>
                                            Orzechy w pierwszej kolejności obierane są z łupinek i 
                                            brązowych skórek. Następnie zostają poddane procesowi prażenia. Jest to
                                            bardzo istotny aspekt całego wyrobu i dokładny czas oraz temperatura pozostają
                                            tajemnicą. <br></br>
                                            Orzechy w tym momencie mają odpowiedni aromat. Należy je przestudzić i i zmiksować.
                                            Czas tej ostatniej czynności zależy od konsystencji jaką chcemy uzyskać. W tym czasie 
                                            wydziela się olej z orzechów, który sprawia, że całosć staje sie rzadka.<br></br>
                                            Na sam koniec, o ile chcemy mieć całe kawałki orzechów, wrzucamy lekko posiekane fistaszki
                                            do naszego masła i pakujemy do szklanych słoików. Produkt jest potem rozprowadzany na cały świat.</p>
                    <Button id='btn-filled' variant="contained" color="secondary" onClick={() => setStory(false)}>
                    Powrót
                    </Button>
                    </div>
                  }
                  
                
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  
}

export default ManufacturePage;