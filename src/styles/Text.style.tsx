import styled from "styled-components";

export const TitleText = styled.h1`
    font-size: 40px;
    color: var(--color-text);
    font-family: 'Gill Sans';
    display: block;
`

export const TitleText2 = styled(TitleText)`
    color: var(--color-text);
`

export const ParagraphText = styled.p`
    font-size: 20px;
    font-family: 'Gill Sans';
    color: var(--color-text-muted);
`

export const ParagraphText2 = styled(ParagraphText)`
    color: var(--color-text-muted);
    width: 50%;
    @media (max-width:700px) {
        width:80%;
    }
`