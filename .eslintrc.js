module.exports = {
  'root': true,
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    // 四个级别： base/essential/strongly-recommended/recommended, 使用最高约束
    'eslint:recommended', // eslint
    'plugin:vue/recommended', // eslint-plugin-vue
    'airbnb-base' // eslint-config-airbnb-base
  ],
  'plugins': [
    'markdown', // eslint-plugin-markdown
    'babel', // eslint-plugin-babel
    'import', // eslint-plugin-important
    'vue'
  ],
  // off:0  warn:1  error:2
  'rules': {
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        'singleline': 4,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'vue/require-default-prop': 1,
    'vue/singleline-html-element-content-newline': [
      0,
      {
        'ignoreWhenNoAttributes': true,
        'ignoreWhenEmpty': true
      }
    ],
    // airbnb
    'comma-dangle': [
      'warn',
      {
        'arrays': 'never',
        'objects': 'ignore',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore'
      }
    ],
    'camelcase': 0,
    'dot-notation': 0,
    'new-parens': [
      'warn'
    ],
    'no-mixed-spaces-and-tabs': [
      'warn',
      'smart-tabs'
    ],
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'quote-props': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'global-require': 0,
    'eqeqeq': 1,
    'no-redeclare': 1,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'no-undef': 0, // 不开启 一些全局注册的组件
    'no-unused-vars': ['warn', { 'args': 'none', 'ignoreRestSiblings': true }],
    'no-multiple-empty-lines': [
      'error', {
        'max': 2
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': [
      'warn'
    ],
    'import/first': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-useless-return': 0,
    'prefer-const': 0,
    'no-else-return': 0,
    'declaration-block-trailing-semicolon': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'no-bitwise': 0,
    'padded-blocks': 0,
    'no-return-assign': 0,
    'max-len': [
      'warn',
      {
        'code': 150,
        'ignoreComments': true
      }
    ],
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'no-nested-ternary': 0,
    'prefer-rest-params': 0,
    'class-methods-use-this': 0,
    // tab缩进
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-tabs': 1,
    'quotes': [
      2,
      'single'
    ],
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 1 : 2,
    'no-var': 1,
    'no-const-assign': 2,
    'import/named': 0,
    'semi': [
      1,
      'always'
    ],
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 2,
    'no-unreachable': 2,
    'no-lone-blocks': 0,
    // 关键字周围强制使用空格
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // 大括号中强制使用空格
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    // 单行代码块前后要加空格
    'block-spacing': [
      'warn',
      'always'
    ],
    // 逗号后面加空格
    'comma-spacing': [
      'warn',
      {
        'before': false,
        'after': true
      }
    ],
    // 分号后面加空格
    'semi-spacing': [
      'warn',
      {
        'before': false,
        'after': true
      }
    ],
    // 在注释前有空白
    'spaced-comment': [
      'warn',
      'always'
    ],
    // 箭头函数前后要有空格
    'arrow-spacing': [
      'warn',
      {
        'before': true,
        'after': true
      }
    ],
    // 对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      'warn',
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    // 要求操作符周围有空格
    'space-infix-ops': [
      'warn',
      {
        'int32Hint': false
      }
    ],
    'jsx-quotes': 1
  }
};