import { StyledSection } from './Section.styled';
import { SecondaryTitle } from 'components/Titles/Titles.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SecondaryTitle>{title}</SecondaryTitle>
      {children}
    </StyledSection>
  );
};
