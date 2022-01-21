export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61eadf1f8a932b1bd5d43522',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-66q859g3',
                  apiId: '68920e03-4ea6-449b-bc2d-39526f294edc'
                },
                {
                  buildHookId: '61eadf1f424e0f38cf8243da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5toy7ia1',
                  apiId: 'f424bca0-1f53-474e-87fd-f007b5f6afb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FendShooter/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5toy7ia1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
