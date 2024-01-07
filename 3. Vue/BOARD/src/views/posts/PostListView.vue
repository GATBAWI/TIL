<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goDetailPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
	return (posts.value = getPosts());
};
fetchPosts();
const goDetailPage = id => {
	// return router.push(`/posts/${id}`);
	return router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: '김태용',
		// },
		// hash: '#재활',
	});
};
</script>

<style lang="scss" scoped></style>
