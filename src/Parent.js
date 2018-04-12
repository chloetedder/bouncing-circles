import React from 'react';
import Circle from './Circle';
import Counter from './Counter';

class Parent extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            valUp: 0,
            valDown: 0,
            valLeft: 0,
            valRight: 0,
            start: 0,
            stop: 0,
            before: 0,
            reset: 0
          };
        this.handleUpdateUp = this.handleUpdateUp.bind(this);
        this.handleUpdateDown = this.handleUpdateDown.bind(this);
        this.handleUpdateLeft = this.handleUpdateLeft.bind(this);
        this.handleUpdateRight = this.handleUpdateRight.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.onClickStart = this.onClickStart.bind(this);
        this.onClickStop = this.onClickStop.bind(this);
    }

    handleUpdateUp(v){
        this.setState({
            valUp : v
        });
    }

    handleUpdateDown(v){
        this.setState({
            valDown : v
        })
    }

    handleUpdateRight(v){
        this.setState({
            valRight : v
        });
    }

    handleUpdateLeft(v){
        this.setState({
            valLeft : v
        });
    }

    handleReset(r){
        this.setState({
            reset : r
        });
    }
    
    onClickStart(){
        this.setState({
            start : 1,
            stop : 0,
            before : 0
        })
    }

    onClickStop(){
        this.setState({
            start : 0,
            stop : 1,
            reset : 1
        })
    }
    componentWillMount(){
        this.setState({
            before: 1
        });
    }

    render() {
        return(
            <div>
                <h3>Top and Bottom Wall</h3>
                <Counter valUp={this.state.valUp}
                valDown={this.state.valDown}
                start={this.state.start}
                reset={this.state.reset}
                handleReset={this.handleReset}
                />
                <h3>Left and Right Wall</h3>
                <Counter valDown={this.state.valLeft}
                valUp={this.state.valRight}
                start={this.state.start}
                reset={this.state.reset}
                handleReset={this.handleReset}
                />
                <button type="submit" start={this.state.start} onClick={this.onClickStart} >Start</button>
                <button type="submit" stop={this.state.stop} onClick={this.onClickStop} >Stop</button>
                <canvas></canvas>
                <Circle handleUpdateUp={this.handleUpdateUp}
                handleUpdateDown={this.handleUpdateDown}
                handleUpdateLeft={this.handleUpdateLeft}
                handleUpdateRight={this.handleUpdateRight}
                start={this.state.start}
                stop={this.state.stop}
                before={this.state.before}
                />
            </div>
        );
    }
}

export default Parent;