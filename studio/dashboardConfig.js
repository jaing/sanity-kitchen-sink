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
                  buildHookId: '5ee9cd26b2a514bc5719877d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i6816gva',
                  apiId: '6d010366-db39-4e55-a0dc-fc8952dfac17'
                },
                {
                  buildHookId: '5ee9cd268d50678c7b5ba336',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qiysfhj8',
                  apiId: 'c0512aac-c36f-4ad4-b785-b3f885625f26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaing/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qiysfhj8.netlify.app', category: 'apps'}
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
