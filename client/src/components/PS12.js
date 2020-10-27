import React  from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';



class PS12 extends React.Component {
    constructor() {
		super();
		this.state = {
			apiData: undefined
        };
    }
    componentDidMount(){
        axios.get("http://api.marketstack.com/v1/eod?access_key=199cec6c708baf981408efd9320828e9&symbols=MSFT,GOOGL,AMZN&date_from=2020-01-03&date_to=2020-01-04").then(response =>{
                console.log("My api response", response.data)
                this.setState({apiData: response.data});
            })
            .catch(err=> {
            console.log("API error",err)
            })
        }
    render(){
        console.log(this.state.apiData)
    return this.state.apiData !== undefined ? (
        <div className="row">
            <div className="col-12">
                <h2>Closing price</h2>
                {this.state.apiData.data.length()<4 ? (<p>one of the days you intered is a holiday</p>):(<p></p>)}
                <ul>
                {
                this.state.apiData.data.map((stock)=>{
                    return(
                    <li>on {stock.date.slice(10)} the closing price of {stock.symbol} was {stock.close}</li>
                    )
                })}
                </ul>
            </div>
        </div>

    ):(<div style={{marginTop:'350px', height:'700px'}}><center><CircularProgress disableShrink /></center></div>)

}
}

export default PS12 ;
