import PropTypes from 'prop-types';
import { AppSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <AppSection>
      <Title>{title}</Title>
      {children}
    </AppSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
