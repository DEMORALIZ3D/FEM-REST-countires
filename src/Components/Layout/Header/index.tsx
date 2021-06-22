import * as React from 'react';
import { HeaderWrapper } from './styles';
import { stateContext, updateTheme } from '../../../context';

const Header: React.FC = () => {
    const { state, dispatch } = React.useContext(stateContext);

    const themeToggle = () => {
        return dispatch(updateTheme(state.theme === 'light' ? 'dark' : 'light'))
    }

    return (
        <div>
            <HeaderWrapper className="d-flex w-100">
                <div className="d-flex align-items-center">
                    <span className="material-icons me-3">
                        travel_explore
                    </span>
                    <h3 className="mb-0">Where in the world?</h3>
                </div>
                <div className="d-flex flex-grow-1 align-items-center justify-content-end" onClick={themeToggle}>
                    <span className="material-icons pointer me-3" title={`Set ${state.theme !== 'light' ? 'Light' : 'Dark'} Mode`}>
                        {state.theme !== 'light' ? 'light_mode' : 'dark_mode'}
                    </span>
                    <h5 className="mb-0">{state.theme !== 'light' ? 'Light Mode' : 'Dark Mode'}</h5>
                </div>
            </HeaderWrapper>
        </div>
    )
}

export default Header;
