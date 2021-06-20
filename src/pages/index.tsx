import * as React from 'react';
import {initialState, reducer} from "../context";

const Index = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div>
            This is a test {state.theme}
        </div>
    )
};

export default Index;