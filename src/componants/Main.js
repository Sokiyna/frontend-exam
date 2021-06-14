import axios from 'axios';
import React, { Component } from 'react';
import MainCard from './MainCard';

class Main extends Component {

constructor(props){
    super(props);
    this.state={

        serverLink: process.env.PORT,
        digimon:[],
        showDijimon:false
    }
}

componentDidMount= async() =>{


    const digimonArr = await axios.get(`${this.state.serverLink}/digimon`);

    this.setState({
        digimon:digimonArr.data,
        showDijimon:true
    })
    
}

addToFav = async (digimonData) =>{

    await axios.post(`${this.state.serverLink}/addFavDijimon`, digimonData);
}





    render() {
        return (
          <>
          {this.state.showDijimon &&

          this.state.digimon.map((digimon, idx)=>{
              return(
                 <MainCard
                 digimon={digimon}
                 idx={idx}
                 addToFav={this.addToFav}

                 />

              )
          })
          
          
          }
          
          
          </>
        )
    }
}

export default Main;
