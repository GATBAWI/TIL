<template>
	<div class="card">
		<div class="card-body">
			<!-- type : news , notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<!-- <h5 class="card-title red">Card title</h5> -->
			<!-- {{ classes }} -->
			<p class="card-text">
				{{ contents }}
			</p>
			<a
				v-if="isLike"
				href="#"
				class="btn"
				:class="isLikeClass"
				@click="toggleLike"
				>좋아요</a
			>
			<a v-else href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			// required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		obj: {
			type: Object,
			defalut: () => {
				// 객체 디폴트는 {} 빈 객체로 설정!
				return {};
			},
		},
	},
	emits: ['toggleLike'],
	setup(props, context) {
		// const style = useCssModule();
		// const color = ref('black');
		// color.value = 'red';
		// console.log(props);
		const isLikeClass = computed(() => {
			return props.isLike ? 'btn-danger' : 'btn-outline-danger';
		});
		const typeName = computed(() => {
			return props.type ? '뉴스' : '공지사항';
		});
		const color = ref('red');
		const toggleLike = () => {
			return context.emit('toggleLike');
		};
		return { color, isLikeClass, typeName, toggleLike };
	},
};
</script>

<style scoped>
.red {
	color: v-bind(color) !important;
}
</style>

<!-- <style module="classes">
.red {
	color: red !important;
}
</style> -->

<!-- <style module>
.red {
	color: red !important;
}
</style> -->

<!-- <style scoped>
.red {
	color: red !important;
}
</style> -->
