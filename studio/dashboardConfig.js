export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe13a81afbbcf0123f4e8b6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nvars7io',
                  apiId: 'e93fc511-0483-41ce-a4f8-1a574db8d442'
                },
                {
                  buildHookId: '5fe13a82afbbcf008df4e963',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cvv3ywi9',
                  apiId: '0fe52910-1c43-4e0f-a151-bea9ee9a2da2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jumus-jumbuck/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cvv3ywi9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
