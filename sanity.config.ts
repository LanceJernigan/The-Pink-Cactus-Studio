import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemas} from './schemas'
import {menuStructure} from './structure/menuStructure'

export default defineConfig({
  name: 'default',
  title: 'The Pink Cactus ',

  projectId: 'qr2k8uuz',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: menuStructure,
    }),
  ],

  schema: {
    types: schemas,
  },
})
