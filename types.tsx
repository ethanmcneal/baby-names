/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  'My Components': undefined;
};

export type TabOneParamList = {
  Home: undefined;
};

export type TabTwoParamList = {
  MyComponents: undefined;
  'SquareCard': undefined
  CenterView: undefined
};

export type Name = {
  id: number,
  name: string,
}

export type NameState = {
  boyNames: Array<Name>,
  girlNames: Array<Name>,
  likedNames: Array<Name>,
  dislikedNames: Array<Name>,
  lastIndex: any
}