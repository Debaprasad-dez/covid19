import axios from 'axios';

const url='https://api.covid19india.org/v4/data.json';

export const fetchData=async()=>{
    try{
        const {data}=await axios.get(url);
        const modifiedData={
            confirmed:data.TR.total.confirmed,
            active:data.TR.total.confirmed-data.TR.total.recovered-data.TR.total.deceased,
            recovered:data.TR.total.recovered,
            deceased:data.TR.total.deceased,
            
            
        }
        return modifiedData;
    }
    catch(error){

    }
}
