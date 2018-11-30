(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(n,e,i){var t=i(1),o=i(4),l=i(54).PageRenderer;l.__esModule&&(l=l.default);var a=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:i(138)}},componentWillMount:function(){},render:function(){return t.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,n.exports=a},138:function(n,e){n.exports="\n## Full Documentation\n[![codecov](https://codecov.io/gh/veysiyildiz/vertical-timeline-component-for-react/branch/master/graph/badge.svg)](https://codecov.io/gh/veysiyildiz/vertical-timeline-component-for-react) [![Build Status](https://travis-ci.org/veysiyildiz/vertical-timeline-component-for-react.svg?branch=master)](https://travis-ci.org/veysiyildiz/vertical-timeline-component-for-react) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/veysiyildiz/vertical-timeline-component-for-react/issues)\n\n[npm](https://www.npmjs.com/package/vertical-timeline-component-for-react) / [demo](https://veysiyildiz.github.io/vertical-timeline-component-for-react)\n\n[![Vertical-Timeline-Component-React.gif](https://i.postimg.cc/3wZYZ0Kq/Vertical-Timeline-Component-React.gif)](https://postimg.cc/1g4kmtV0)\n\n## Install\n\n```code\n$ npm i vertical-timeline-component-for-react\n```\n\n\n## Usage\n\n```code|lang-jsx\nimport { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';\n\n<Timeline lineColor={'#ddd'}>\n  <TimelineItem\n    key=\"001\"\n    dateText=\"11/2010 – Present\"\n    style={{ color: '#e86971' }}\n  >\n    <h3>Title, Company</h3>\n    <h4>Subtitle</h4>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n  </TimelineItem>\n  <TimelineItem\n    key=\"002\"\n    dateText=\"04/2009 – 11/2010\"\n    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}\n    bodyContainerStyle={{\n      background: '#ddd',\n      padding: '20px',\n      borderRadius: '8px',\n      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',\n    }}\n  >\n    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>\n    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n  </TimelineItem>\n  <TimelineItem\n    key=\"003\"\n    dateComponent={(\n      <div\n        style={{\n          display: 'block',\n          float: 'left',\n          padding: '10px',\n          background: 'rgb(150, 150, 150)',\n          color: '#fff',\n        }}\n      >\n        11/2008 – 04/2009\n      </div>\n    )}\n  >\n    <h3>Title, Company</h3>\n    <h4>Subtitle</h4>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n  </TimelineItem>\n  <TimelineItem\n    key=\"004\"\n    dateText=\"08/2008 – 11/2008\"\n    dateInnerStyle={{ background: '#76bb7f' }}\n  >\n    <h3>Title, Company</h3>\n    <h4>Subtitle</h4>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n    <p>\n      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n      exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n      est.\n    </p>\n  </TimelineItem>\n</Timeline>\n```\n\n\n## Timeline Props\n\n### `animate={ Boolean }`\n\nEnable or disable animations on elements (default: true).\n\n### `className={ String }`\n\nAdd extra class name to root div element.\n\n### `lineColor={ String }`\n\nChoose your timeline color (default: `'#000'`).\n\n## TimelineItem Props\n\n### `className={ String }`\n\nAdd extra class name to root div element.\n\n### `style={ Object }`\n\nAdd extra style to root div element.\nYou can change color of timeline points by adding color to style prop.\n\n### `dateText={ String }`\n\nDate of the element.\n\n### `dateStyle={ Object }`\n\nAdd extra style to `'timeline-item-date'` span element.\n\n### `dateInnerStyle={ Object }`\n\nAdd extra style to `'timeline-item-dateinner'` time element.\n\n### `dateComponent={ JSX }`\n\nAdd custom date Component\nWhen you use `'dateComponent'` the props `'dateText'`, `'dateStyle'` and `'dateInnerStyle'` will be ignored. \n\n### `bodyContainerStyle={ Object }`\n\nAdd extra style to `'body-container'` div element.\n\n### `visibilitySensorProps={ Object }`\n\nCustom props pass to VisibilitySensor component (default: { partialVisibility: true, offset: { bottom: 50 } }).\n*See [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) for more information.*\n\n\n## Showcase\n\n* [(Veysi YILDIZ Cv)](https://veysiyildiz.github.io/).\n\n### Launch demo\n\n```code\n$ npm run start\n```\n\n### Run tests\n\n```code\n$ npm run test\n```\n\n### Watch tests\n\n```code\n$ npm run test:watch\n```\n\n### Run lint\n\n```code\n$ npm run test:lint\n```\n\n## License\n\n*vertical-timeline-component-for-react* is available under MIT. See [LICENSE](./LICENSE.txt) for more details."}}]);