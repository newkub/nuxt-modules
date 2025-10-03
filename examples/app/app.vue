<script setup lang="ts">
// ทดสอบการใช้งาน config exporter module
const { $configExporter } = useNuxtApp();

const status = ref('Module loaded successfully');
const availableConfigs = ref({});

// List of modules in the workspace
const modules = ref([
  { name: 'tsdown-plugins-reexport', description: 'TSDown plugin for re-exporting config files', version: '0.1.0' },
  { name: 'nuxt-app', description: 'Example Nuxt application', version: '1.0.0' }
]);

// ทดสอบการเรียกใช้งาน config exporter
onMounted(() => {
  try {
    const configs = $configExporter?.getConfigFiles?.();
    if (configs) {
      availableConfigs.value = configs;
    }
  } catch (error) {
    console.error('Error accessing config exporter:', error);
  }
});
</script>

<template>
  <div>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Config Exporter Module Test</h1>

      <div class="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 class="text-xl font-semibold mb-2">Module Status</h2>
        <p>{{ status }}</p>
      </div>

      <div class="bg-green-50 p-4 rounded-lg mb-4">
        <h2 class="text-xl font-semibold mb-2">Available Modules</h2>
        <ul class="list-disc list-inside">
          <li v-for="module in modules" :key="module.name" class="mb-2">
            <strong>{{ module.name }}</strong> ({{ module.version }}): {{ module.description }}
          </li>
        </ul>
      </div>

      <div class="bg-blue-50 p-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">Available Config Files</h2>
        <ul class="list-disc list-inside">
          <li v-for="(config, name) in availableConfigs" :key="name">
            {{ name }}: {{ config }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
