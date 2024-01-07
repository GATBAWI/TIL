<template>
	<div class="container py-3">
		<PostCreate @create-post="createPost"></PostCreate>

		<hr class="my-4" />

		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col col-4">
				<AppCard
					:title="post.title"
					:contents="post.contents"
					:type="post.type"
					:is-like="post.isLike"
					@toggle-like="post.isLike = !post.isLike"
				></AppCard>
			</div>
		</div>
		<hr class="my-4" />
		<!-- <LabelInput
			:model-value="username"
			@update:model-value="value => (username = value)"
		></LabelInput> -->
		<LabelInput v-model="username" label="이름 : "></LabelInput>
		<LabelTitle v-model:title="username" label="제목"></LabelTitle>
		<Username
			v-model:firstname="firstname"
			v-model:lastname="lastname"
		></Username>
	</div>
</template>

<script>
import { ref, reactive } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import Username from './Username.vue';
export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		Username,
	},
	setup() {
		const posts = reactive([
			{
				id: 1,
				title: '제목',
				contents: '내용',
				isLike: true,
				type: 'news',
			},
			{
				id: 2,
				title: '제목',
				contents: '내용',
				isLike: false,
				type: 'news',
			},
			{
				id: 3,
				title: '제목',
				contents: '내용',
				isLike: true,
				type: 'notice',
			},
			{
				id: 4,
				title: '제목',
				contents: '내용',
				isLike: false,
				type: 'news',
			},
			{
				id: 5,
				title: '제목',
				contents: '내용',
				isLike: true,
				type: 'notice',
			},
		]);
		// const createPost = (a, b, c, d) => {
		// 	return console.log('create post', a, b, c, d);
		// };
		const createPost = newPost => {
			console.log('createPost');
			console.log('newPost : ', newPost);
			posts.push(newPost);
		};
		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
