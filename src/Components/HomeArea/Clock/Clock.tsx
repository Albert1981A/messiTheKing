import { time } from "console";
import { Component } from "react";
import "./Clock.css";

interface ClockState {
	time: string;
}

class Clock extends Component<{}, ClockState> {

    // private timerId: number = 0;
    private timerId?: number;

    // 1. Constructor - React creates an Object from this class.
    // usage: send props to super class, init state
    public constructor(props: {}) {
        super(props);
        this.state = {
			time: ""
        };
    }

    // 2. componentDidMount - The component is ready for use.
    // usage: perform side effects once.
    public componentDidMount(): void {
        this.timerId = window.setInterval(()=>{
            const time = new Date();
            this.setState({time: time.toLocaleTimeString()})
        }, 1000);
    }

    // 3. render - UI needs to be updated.
    // usage: return back the component UI.
    public render(): JSX.Element {
        return (
            <div className="Clock Box">
                <h3>Clock - Lifecycle Hooks of a Component</h3>
				<span>{this.state.time}</span>
            </div>
        );
    }


    // 4. componentDidUpdate - props or state has been change.
    // usage: do your logic if props or state have changed (rarely).
    public componentDidUpdate(): void {
        console.log("The DOM Refreshed...");
    }

    // 5. componentWillUnmount - the component is about to be destroyed.
    // usage: clean desktop, close all methods and events that works in while true.
    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }
}

export default Clock;

// 0:47
