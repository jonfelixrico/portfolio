import { Project } from '@/types/project.interface'
import markdown from './wisdom.md'

const project: Project = {
  title: 'Mockiyomi',
  description: markdown,
  image: '/portfolio/mockiyomi/preview.png',

  tech: [
    {
      label: 'Next.js',
      icon: '/icons/next-js.svg',
    }
  ],

  links: [
    {
      icon: 'icons/github.svg',
      label: 'REST API',
      url: 'https://github.com/jonfelixrico/wisdom-core-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Discord Bot',
      url: 'https://github.com/jonfelixrico/wisdom-bot-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Web app front-end',
      url: 'https://github.com/jonfelixrico/wisdom-panel-client-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Web app back-end',
      url: 'https://github.com/jonfelixrico/wisdom-panel-server-2022',
    },
  ],
}
export default project
