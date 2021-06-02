import styled from 'styled-components';

interface IButtonStyle {
    enabled: boolean
};

export const Button = styled.button.attrs<IButtonStyle>((props) => ({
    className: `nes-btn is-primary py-2 px-20 ${!props.enabled ? 'is-disabled' : ''}`
}))<IButtonStyle>``;