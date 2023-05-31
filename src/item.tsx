import {Component} from "react";


class Item extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {

    }


    componentDidMount() {

    }

    render() {
        return (
            <h1>
                Товар здесь
            </h1>
        );
    }

}

export default Item;