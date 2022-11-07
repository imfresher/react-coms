export type Options = {
  skip?: boolean | string[];
  testingLib?: boolean;
};

function baseText(doInjext: boolean, component: string, options: Options = {}) {

}

export default function demoTest(component: string, options: Options = {}) {
  baseText(false, component, options);
}
