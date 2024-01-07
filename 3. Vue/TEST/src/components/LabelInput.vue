<template>
	<label for=""
		>{{ label }}
		<!-- <input v-model="username" type="text" /> -->
		<!-- <input
			:value="username"
			@input="event => username.target.value"
			type="text"
		/> -->
		<!-- <input
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
			type="text"
		/> -->
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
