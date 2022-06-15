// import s from './Container.module.scss';
import { AppContainer } from './Container.styled';

function Container({ children }) {
  return <AppContainer>{children}</AppContainer>;
}

export default Container;
