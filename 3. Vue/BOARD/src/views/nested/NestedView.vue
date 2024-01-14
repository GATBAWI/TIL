<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<RouterLink class="nav-link" active-class="active" to="/nested/one"
					>Nested One</RouterLink
				>
				<!-- <a class="nav-link active" aria-current="page" href="#">Nested One</a> -->
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link" active-class="active" to="/nested/two"
					>Nested Two</RouterLink
				>
				<!-- <a class="nav-link" href="#">Nested Two</a> -->
			</li>
		</ul>
		<hr class="my-4" />
		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
