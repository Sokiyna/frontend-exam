import axios from 'axios';
import React, { Component } from 'react';
import FavCard from './FavCard';
import UpdateForm from './UpdateForm';

class FavoriteDigimons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.PORT,
            digimon: [],
            showDigimon: false,
            showForm: false,
            name: '',
            img: '',
            level: '',
            index: 0

        }
    }


    componentDidMount = async () => {

        const digimonArr = await axios.get(`${this.state.serverLink}/getFavDigimon`);

        this.setState({
            showDigimon: true,
            digimon: digimonArr.data
        })

    }


    deleteDigimon = async (index) => {

        const id = this.state.digimon[index]._id;

        const deleteDigimon = await axios.delete(`${this.state.serverLink}/deleteDigimon/${id}`);

        this.setState({
            digimon: deleteDigimon.data
        })
    }


    showUpdateForm = (idx) => {

        const selectedArr = this.state.digimon[idx];

        this.setState({

            name: selectedArr.name,
            img: selectedArr.img,
            level: selectedArr.level,
            showForm: true,
            index: idx

        })

    }

    updateDigimon = async (event, index) => {
        event.preventDefault();

        const id = this.state.digimon[index]._id;

        const digimonData = {

            name:this.state.name,
            img:this.state.img,
            level:this.state.level


        }

        const updateArr = await axios.put(`${this.state.serverLink}/updateDigimon/${id}`, digimonData)

        this.setState({
            digimon: updateArr.data

        })


    }


    UpdateNameFunc = (e => this.setState({ name: e.target.value }))
    UpdateImgFunc = (e => this.setState({ img: e.target.value }))
    UpdateLevelFunc = (e => this.setState({ level: e.target.value }))











    render() {
        return (
            <>
                {this.state.showForm &&

                    <UpdateForm
                        name={this.state.name}
                        img={this.state.img}
                        level={this.state.level}
                        UpdateNameFunc={this.UpdateNameFunc}
                        UpdateImgFunc={this.UpdateImgFunc}
                        UpdateLevelFunc={this.state.UpdateLevelFunc}
                        updateDigimon={this.updateDigimon}


                    />
                }

                {this.state.showDigimon &&

                    this.state.digimon.map((digimon, idx) => {


                        return(


                            <FavCard
                                idx={idx}
                                digimon={digimon}
                                deleteDigimon={this.deleteDigimon}
                                showUpdateForm={this.showUpdateForm}
    
    
                            />
                        )




                    })

                }


            </>
        )
    }
}

export default FavoriteDigimons;
