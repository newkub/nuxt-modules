import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      configExporter: {
        getConfigFiles: () => {
          // Placeholder: return available config files or empty object
          return {}
        },
        exportConfigFiles: () => {
          // Placeholder: function to export config files
          console.log('Exporting config files...')
        }
      }
    }
  }
})
