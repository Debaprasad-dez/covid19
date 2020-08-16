import React from 'react';
import './App.css';
import { fetchData } from './api';
import CountUp from 'react-countup'


class App extends React.Component{
  state={
    data:{},data2:{}
  }
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData});
  }
 
  

  render(){
    
        return (
      <div className="container text-center">
        <h1 className="mt-4" id="title">COVID-19 <span className="h5">Tripura</span></h1>
        <hr/>
        <p>Latest Data of COVID-19 in our State (Tripura)</p>
        <hr/>
        <div className="row my-5">
          <div className="col-md-3 text-info">
          <h5>Total</h5>
          <p>
            
            <CountUp 
              start={0}
              end={[this.state.data.confirmed]}
              duration={5}
              separator=","
            />
          </p>
          
          </div>
          <div className="col-md-3 text-danger">
          <h5>Active</h5>
          <p>
          <CountUp 
              start={0}
              end={[this.state.data.active]}
              duration={5}
              separator=","
            />
          </p>
          
          </div>
          <div className="col-md-3 text-success">
          <h5>Recovered</h5>
          <p>
          <CountUp 
              start={0}
              end={[this.state.data.recovered]}
              duration={5}
              separator=","
            />
          </p>
          </div>
          <div className="col-md-3 text-muted">
          <h5>Deceased</h5>
          <p>
          <CountUp 
              start={0}
              end={[this.state.data.deceased]}
              duration={5}
              separator=","
            />
          </p>
          </div>
        </div>
        <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1APwq1df6Mw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="text-left my-5">
          <h2 id="tips">Tips</h2>
          <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
          <p>Maintain a safe distance from anyone who is coughing or sneezing.</p>
          <p>Wear a mask when physical distancing is not possible.</p>
          <p>Don’t touch your eyes, nose or mouth.</p>
          <p>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</p>
          <p>Stay home if you feel unwell.</p>
          <p>If you have a fever, cough and difficulty breathing, seek medical attention.</p>
        </div>
        <div className="text-left my-5">
          <h2 id="tips">Helpline</h2>
          <p>My Gov CORONA helpdesk whatsapp Number - 09013151515</p>
          <p>State Help line Number - 0381-231-5879</p>
          <p>West Tripura - 0381-232-3945</p>
          <p>Sepahijala District - 9862752963 / 9862557952</p>
          <p>Khowai District - 03825-222-229</p>
          <p>Gomati District - 9436106361</p>
          <p>South Tripura District - 03823-222-145</p>
          <p>Dhalai District - 9886866853</p>
          <p>Unakoti District - 9862036563</p>
          <p>North Tripura District - 8787693683/ 9366225399</p>
          <a href=""><p>https://covid19.tripura.gov.in/</p></a>
          
        </div>
      </div>
    );

  }
}

export default App;
