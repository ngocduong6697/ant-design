"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6669],{465147:function(_,c,n){n.r(c);var m=n(502143),u=n(968521),p=n(720719),h=n(28840),x=n(759907),s=n(828089),g=n(825673),j=n(902068),v=n(574399),f=n(863942),b=n(316073),E=n(24628),P=n(719260),D=n(956140),o=n(127179),a=n(905388),O=n(245583),R=n(606965),M=n(268696),k=n(587302),t=n(424128),w=n(249706),C=n(795127),T=n(116846),A=n(720538),y=n(212039),I=n(73024),L=n(553913),i=n(606641),B=n(667294),e=n(785893);function d(){var l=(0,i.eL)(),r=l.texts;return(0,e.jsx)(i.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:r[1].value}),(0,e.jsx)("li",{children:r[2].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"rate-demo-basic"},previewerProps:{title:"Basic",filename:"components/rate/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Rate } from 'antd';
const App = () => <Rate />;
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"rate-demo-half"},previewerProps:{title:"Half star",filename:"components/rate/demo/half.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Rate } from 'antd';
const App = () => <Rate allowHalf defaultValue={2.5} />;
export default App;
`,description:"<p>Support select half star.</p>"}},{demo:{id:"rate-demo-text"},previewerProps:{title:"Show copywriting",filename:"components/rate/demo/text.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App = () => {
  const [value, setValue] = useState(3);
  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};
export default App;
`,description:"<p>Add copywriting in rate components.</p>"}},{demo:{id:"rate-demo-disabled"},previewerProps:{title:"Read only",filename:"components/rate/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Rate } from 'antd';
const App = () => <Rate disabled defaultValue={2} />;
export default App;
`,description:"<p>Read only, can't use mouse to interact.</p>"}},{demo:{id:"rate-demo-clear"},previewerProps:{title:"Clear star",filename:"components/rate/demo/clear.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Rate } from 'antd';
const App = () => (
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </>
);
export default App;
`,description:"<p>Support set allow to clear star when click again.</p>"}},{demo:{id:"rate-demo-character"},previewerProps:{title:"Other Character",filename:"components/rate/demo/character.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
const App = () => (
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate
      character="A"
      allowHalf
      style={{
        fontSize: 36,
      }}
    />
    <br />
    <Rate character="\u597D" allowHalf />
  </>
);
export default App;
`,description:"<p>Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.</p>"}},{demo:{id:"rate-demo-character-function"},previewerProps:{title:"Customize character",filename:"components/rate/demo/character-function.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const App = () => (
  <>
    <Rate defaultValue={2} character={({ index }) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  </>
);
export default App;
`,description:"<p>Can customize each character using <code>(RateProps) => ReactNode</code>.</p>"}},{demo:{id:"rate-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/rate/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.12.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, Rate } from 'antd';

/** Test usage. Do not use in your production. */
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Rate: {
          starColor: 'blue',
          starSize: 40,
          starHoverScale: 'scale(2)',
          starBg: 'red',
        },
      },
    }}
  >
    <Rate defaultValue={2.5} />
  </ConfigProvider>
);
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)(s.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[3].value}),(0,e.jsx)("th",{children:r[4].value}),(0,e.jsx)("th",{children:r[5].value}),(0,e.jsx)("th",{children:r[6].value}),(0,e.jsx)("th",{children:r[7].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[8].value}),(0,e.jsx)("td",{children:r[9].value}),(0,e.jsx)("td",{children:r[10].value}),(0,e.jsx)("td",{children:r[11].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[12].value}),(0,e.jsx)("td",{children:r[13].value}),(0,e.jsx)("td",{children:r[14].value}),(0,e.jsx)("td",{children:r[15].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[16].value}),(0,e.jsx)("td",{children:r[17].value}),(0,e.jsx)("td",{children:r[18].value}),(0,e.jsx)("td",{children:r[19].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[20].value}),(0,e.jsx)("td",{children:r[21].value}),(0,e.jsx)("td",{children:r[22].value}),(0,e.jsx)("td",{children:r[23].value}),(0,e.jsx)("td",{children:r[24].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[25].value}),(0,e.jsx)("td",{children:r[26].value}),(0,e.jsx)("td",{children:r[27].value}),(0,e.jsx)("td",{children:r[28].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[29].value}),(0,e.jsx)("td",{children:r[30].value}),(0,e.jsx)("td",{children:r[31].value}),(0,e.jsx)("td",{children:r[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[33].value}),(0,e.jsx)("td",{children:r[34].value}),(0,e.jsx)("td",{children:r[35].value}),(0,e.jsx)("td",{children:r[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[37].value}),(0,e.jsx)("td",{children:r[38].value}),(0,e.jsx)("td",{children:r[39].value}),(0,e.jsx)("td",{children:r[40].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[41].value}),(0,e.jsx)("td",{children:r[42].value}),(0,e.jsx)("td",{children:r[43].value}),(0,e.jsx)("td",{children:r[44].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[45].value}),(0,e.jsx)("td",{children:r[46].value}),(0,e.jsx)("td",{children:r[47].value}),(0,e.jsx)("td",{children:r[48].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[49].value}),(0,e.jsx)("td",{children:r[50].value}),(0,e.jsx)("td",{children:r[51].value}),(0,e.jsx)("td",{children:r[52].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[53].value}),(0,e.jsx)("td",{children:r[54].value}),(0,e.jsx)("td",{children:r[55].value}),(0,e.jsx)("td",{children:r[56].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[57].value}),(0,e.jsx)("td",{children:r[58].value}),(0,e.jsx)("td",{children:r[59].value}),(0,e.jsx)("td",{children:r[60].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[61].value}),(0,e.jsx)("td",{children:r[62].value}),(0,e.jsx)("td",{children:r[63].value}),(0,e.jsx)("td",{children:r[64].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[65].value}),(0,e.jsx)("td",{children:r[66].value}),(0,e.jsx)("td",{children:r[67].value}),(0,e.jsx)("td",{children:r[68].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[69].value}),(0,e.jsx)("td",{children:r[70].value}),(0,e.jsx)("td",{children:r[71].value}),(0,e.jsx)("td",{children:r[72].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h2",{id:"methods",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Methods"]}),(0,e.jsxs)(s.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[73].value}),(0,e.jsx)("th",{children:r[74].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[75].value}),(0,e.jsx)("td",{children:r[76].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[77].value}),(0,e.jsx)("td",{children:r[78].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(o.Z,{component:"Rate"})]})})}c.default=d}}]);
