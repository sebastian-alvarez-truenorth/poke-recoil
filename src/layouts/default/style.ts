import styled from 'styled-components';

export const Layout = styled.main.attrs({
    className: 'h-screen grid grid-cols-2 overflow-y-hidden container mx-auto'
})`
    grid-template-rows: 20vh 70vh;
`;

export const Header = styled.header.attrs({
    className: 'col-span-2 flex flex-col h-full mt-4'
})``;

export const Footer = styled.footer.attrs({
    className: 'col-span-2 mt-12'
})``;