import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    flex: 1;
    justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_700,
}))`
`;