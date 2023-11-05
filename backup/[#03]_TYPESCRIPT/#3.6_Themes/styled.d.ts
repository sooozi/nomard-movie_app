import "styled-components";
import Theme from './theme';

type ThemeType = typeof Theme;
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}