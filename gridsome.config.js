// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'tomáš_božik',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './content/project/**/*.md',
      }
    }
  ],
  transformers: {
    remark: {}
  },
  templates: {
    Project: '/project/:title'
  },
  siteUrl: 'https://bozik.dev',
}
