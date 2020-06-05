import React, {useEffect, useState} from "react";
import Header from '../Header';
import Menu from '../Menu';
import Table from '../Table';
import Button from '@material-ui/core/Button';

function UseTimeToEat() {
  const [eatingTime, setEatingTime] = useState(false);

  if(eatingTime){
    setTimeout(() => {
      alert("Czas coś zjeść!");
      setEatingTime(false);
    }, 2000);
  }

  return (
    <div>
      <Button id='btn-filled' variant="contained" color="secondary" onClick={() => setEatingTime(!eatingTime)} >
        Wiemy na co teraz czas...
      </Button>
      <p className='paragraph'>
      {eatingTime ? 'dokładnie...' : ''}
      </p>
    </div>
  )
}


function PartnersPage() {
  
  useEffect( () => {
    document.title = `Peanut Butter Love`;
  })

  const partners = [ 'John Doe', 'Michael McDuffin', 'Mary Kensington', 'El Fistasz Co.', 'Henry & Sons sp. z o.o.'];

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
              <h2 className='heading-secondary'>Nasi partnerzy</h2>
              <h3 className='heading-tertiary'>Ludzie, dzięki którym to wszystko jest możliwe</h3>
              <Table partners={partners} />
              <UseTimeToEat />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  
}

export default PartnersPage;