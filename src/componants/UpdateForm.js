import React, { Component } from 'react';



class UpdateForm extends Component {
    render() {
        return (

            <>
            
            <form onSubmit={e=>this.props.updateDigimon(e)}/>
     
            <label>digimon name</label>
            <input type="text" value={this.props.name} onChange={e=>this.props.UpdateNameFunc}/>
     
            <label>digimon image</label>
            <input type="text" value={this.props.img} onChange={e=>this.props.UpdateImgFunc}/>
     
            <label>digimon level</label>
            <input type="text" value={this.props.level} onChange={e=>this.props.UpdateLevelFunc}/>
     
            <input type="text" value="Update Digimon"/>
            </>
        )
    }
}

export default UpdateForm;
