import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
    render () {
        return <div>
            <span>Hello </span>
            <span>World !</span>
            <span>{true}</span>
            <div>{this.children}</div>
        </div>;
    }
}

const a = <MyComponent name="comp-a" id="comp-a">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
);