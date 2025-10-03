declare module '#app' {
  interface NuxtApp {
    $configExporter: {
      getConfigFiles: () => Record<string, any>
      exportConfigFiles: () => any
    }
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $configExporter: {
      getConfigFiles: () => Record<string, any>
      exportConfigFiles: () => any
    }
  }
}

export {};
