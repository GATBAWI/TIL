<template>
	<main>
		<!-- <ProvideInject></ProvideInject> -->
		<!-- <LifecycleHooks></LifecycleHooks> -->
		<!-- <TemplateRefs></TemplateRefs> -->
		<!-- <ScriptSeup></ScriptSeup> -->
		<DynamicComponet></DynamicComponet>
	</main>
</template>

<script>
// import ProvideInject from './ProvideInject.vue';
// import LifecycleHooks from './LifecycleHooks.vue';
// import TemplateRefs from '@/components/TemplateRefs.vue';
// import ScriptSeup from '@/components/ScriptSetup.vue';
import DynamicComponet from '@/components/DynamicComponent.vue';
export default {
	components: {
		// ProvideInject,
		// LifecycleHooks,
		// TemplateRefs,
		// ScriptSeup,
		DynamicComponet,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
