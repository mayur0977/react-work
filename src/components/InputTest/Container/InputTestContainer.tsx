import React from 'react';
import { connect } from 'react-redux';
import { InputProps, InputRender, InputState } from '../Model/Input.model';

export class InputTestContainer extends React.Component<InputProps, InputState> {
    constructor(props: any) {
        super(props)

        this.state = {
            inputText: 'abc',
            isAdded: false
        }
    }

    componentDidMount() {
    }

    render() {

        let dataObject: InputRender = {
            list: ["1", "2", "3"]
        }
        return this.props.render(dataObject);

    }
}

const mapStateToProps = (state: any) => ({
    //  quoteDetailResponse: state.quoteResponseReducer.quoteDetailResponse,
})

const mapDispatchToProps = {
    // setQuoteDetailData: (quoteId: string, primaryFacilityId: string, containerProps: any) => dispatch(setQuoteDetailData(quoteId, primaryFacilityId, containerProps)),
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTestContainer)
