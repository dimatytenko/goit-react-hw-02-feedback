import styled from 'styled-components';

export const FeedbackBox = styled.div``;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
