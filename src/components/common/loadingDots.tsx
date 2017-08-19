import * as React from 'react';

interface LoadingDotsState {
    frame: number;
}
interface LoadingDotsProps {
    interval: number;
    dots: number;
}

class LoadingDots extends React.Component<LoadingDotsProps, LoadingDotsState> {
    interval: any;
    static defaultProps: any;
    constructor(props: any, context: any) {
        super(props, context);

        this.state = { frame: 1 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({  // eslint-disable-line react/no-did-mount-set-state
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return <span>{text}&nbsp;</span>;
    }
}

LoadingDots.defaultProps = {
    interval: 300, dots: 3
};

export default LoadingDots;