module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-case': [0, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'EsLint',
        'VuePress',
        'package.json',
        'TravisCI',
        'Husky',
        'README',
        'util',
        '.editorconfig',
        '.gitignore',
        'commitlint',
        'Example',
        'Button',
        'Icon',
        'Transition',
        'List',
        'Grid',
        'Card',
        'WaterFlow',
        'Album',
        'Sticky',
        'Collapse',
        'Avatar',
        'Badge',
        'Countdown',
        'Loading',
        'LoadMore',
        'Mask',
        'NoticeBar',
        'Popup',
        'Progress',
        'StatusShow',
        'Tag',
        'Steps',
        'Skeleton',
        'ArcPopup',
        'Segment',
        'Tabs',
        'CombinedTabs',
        'Toast',
        'Dialog',
        'Message',
        'SlideView',
        'ActionSheet',
        'Input',
        'Textarea',
        'Radio',
        'Checkbox',
        'ImagePicker',
        'Rules',
        'Rate',
        'Form',
        'Price',
        'Counter',
        'SearchBar',
        'IndexList',
        'Behavior',
        'CapsuleBar'
      ]
    ]
  }
};
