import React from 'react';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			count:0,
			plusSize:"25px",
			minusSize:"25px"
		}
		this.update = this.update.bind(this);
		//this.changeColor = this.changeColor.bind(this);
	}
	
	update(){
		if(this.props.start == 1 && this.props.reset == 1){
			this.setState({
				count : 0
			});
			this.props.handleReset(0);
		}
		else{
		  this.setState({
			  count: this.state.count+(this.props.valUp)+(this.props.valDown)
			});
		}
	}
	/*
	changeColor(){
		if(this.props.valUp > 0){
			setTimeout(()=>{
				this.setState({
					plusSize: "50px"
				});
			},200)
			this.setState({
				plusSize: "25px"
			});
		}
		if(this.props.valDown < 0){
			setTimeout(()=>{
				this.setState({
					minusSize: "50px"
				});
			},100)
			this.setState({
				minusSize: "25px"
			});
		}
	}
	*/

	componentWillUpdate(nextProps,nextState){
		if(nextState !== this.state){
            if(nextState.count - this.state.count >= 11115 || nextState.count - this.state.count >= -11115){
				return true;
            }
		}
		this.update();
		//this.changeColor();
        return false;
		
	}

	componentWillMount(){
		this.setState({
			count : 0
		});
	}
	
	render(){ 
        return(
            <div>
                <button id="up" type="submit" value="+" style={{color:"black", width:this.state.plusSize, height:this.state.plusSize}}>+</button>
                <label>{this.state.count}</label>
                <button id="down" type="submit" value="-" style={{width:this.state.minusSize, height:this.state.minusSize}}>-</button>
            </div>
		);
	}
}
//
//
export default Counter;