import React, {useEffect} from "react";
import Header from '../Header';
import Menu from '../Menu';
import PBinJar from '../../img/PBinJar.jpg'
import {MyContext} from '../../App';
import Button from '@material-ui/core/Button';

function WelcomePage () {
  
  useEffect( () => {
    document.title = `Peanut Butter Love`;
  })

    return(
      <div className='main-container'>
    
        <Header title='PEANUT BUTTER LOVE' subtitle='Z miłości do orzechów'/>

        <main>
          <MyContext.Consumer>
            {(context) => (
          <section className='section-about'>
            <div className="row">
              <div className="col-1-of-4">
                <Menu/>
              </div>
              <div className="col-2-of-4">
              {context.state.pl && 
                <div> 
                  <h2 className='heading-secondary'>O nas</h2>
                  <p className='paragraph'>Jesteśmy rodzinną spółką od lat zajmującą się produkcją masła 
                                        orzechowego.
                                        Łączą nas nie tylko geny, ale także pasja do tego co robimy.<br></br>
                                        Na naszej stronie chcieliśmy przedstawić historię firmy i przybliżyć
                                        proces powstawania naszego produktu. Dbamy o to, by był on najwyższej jakości,
                                        a używane składniki pochodzenia naturalnego. Naszym celem jest także wspieranie lokalnych
                                        przedsiębiorców i na stronie umieściliśmy informacje na temat ludzi,
                                        z którymi współpracujemy.<br></br>
                  </p>
                </div>
              }
              {!context.state.pl && 
                <div>
                  <h2 className='heading-secondary'>About us</h2>
                  <p className='paragraph'>We are a family company dealing in peanut butter production for years.
                                      We are connected not only by genes, but also by a passion for what we do.<br></br> 
                                      On our site, we wanted to present the company's history and bring it closer
                                      the process of creating our product. We make sure that it was of high quality,
                                      and used ingredients of natural origin. Supporting local suppliers is also our goal
                                      so we put information about people we work with on the site too.<br></br>
                  </p>
                </div>
              }
              <Button id='btn-filled' variant="contained" color="secondary" onClick={context.changeLanguage}>
                    pl/eng
              </Button>
              </div>
              <div className="col-1-of-4">
                <img className='photo' src={PBinJar} alt='Masło orzechowe w słoiku'></img>
              </div>
            </div>
            
          </section>
          )}
          </MyContext.Consumer>
        </main>
      </div>
    );
  
}

export default WelcomePage;