<template>
	<div class="card">
		<!-- <div class="card-header">
    Featured
  </div> -->
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ content }}</p>
			<p class="text-muted">{{ createdAt }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
