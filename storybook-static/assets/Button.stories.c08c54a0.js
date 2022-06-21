import{j as i}from"./jsx-runtime.e4519f53.js";import"./index.8eae420d.js";function s(t){var o,r,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(r=s(t[o]))&&(e&&(e+=" "),e+=r);else for(o in t)t[o]&&(e&&(e+=" "),e+=o);return e}function l(){for(var t=0,o,r,e="";t<arguments.length;)(o=arguments[t++])&&(r=s(o))&&(e&&(e+=" "),e+=r);return e}const a=({primary:t=!1,size:o="medium",label:r,...e})=>i("button",{type:"button",className:l(o==="large"?"rounded px-8 py-3 text-xl":o==="small"?"rounded-sm px-2 py-1 text-xs":"rounded px-5 py-2","shadow","transition-colors",t?"bg-blue-600 text-white":"bg-slate-100 text-slate-900",t?"hover:bg-blue-700":"hover:bg-slate-200","active:translate-y-px"),...e,children:r});try{a.displayName="Button",a.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/Button.tsx#Button"]={docgenInfo:a.__docgenInfo,name:"Button",path:"src/Button.tsx#Button"})}catch{}var g={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:a,argTypes:{backgroundColor:{control:"color"}}};const n=t=>i(a,{...t}),c=n.bind({});c.args={primary:!0,label:"Button"};const d=n.bind({});d.args={label:"Button"};const p=n.bind({});p.args={size:"large",label:"Button"};const w=n.bind({});w.args={size:"small",label:"Button"};const m=["Primary","Secondary","Large","Small"];export{p as Large,c as Primary,d as Secondary,w as Small,m as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories.c08c54a0.js.map
