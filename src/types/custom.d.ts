declare module '*.svg' {
  const content: string;
  export default content;
}

// No more implict chldren for FC
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
export type Children = ReactNode | ReactNode[];
