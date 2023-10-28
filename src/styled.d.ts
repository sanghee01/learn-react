import "styled-components";

// 테마가 어떻게 보일지를 설명할 부분
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
