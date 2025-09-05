<script lang="ts">
	import BaseHead from '$lib/components/server/BaseHead.svelte';
	import Experience from '$lib/components/ui/Experience.svelte';
</script>

<BaseHead />

<div class="font-inter mx-auto flex flex-col gap-y-16 px-4 py-4 tracking-tight">
	<section class="mx-auto mt-24 flex flex-col gap-y-4 sm:w-full md:w-2xl">
		<h1 class="text-3xl font-bold">Hi, I'm ndu.</h1>
		<p>
			I am a builder, a full-stack developer driven by the desire to turn ideas I care about into
			impactful digital experiences.
		</p>
		<p>
			My work goes beyond mere functionality; it reflects my passion for creating software that
			truly resonates. It tells you about me—the creator with a commitment to building robust and
			scalable applications.
		</p>
		<p>
			I build products that evoke a feeling, whether it's the satisfaction of a problem elegantly
			solved or the excitement of connecting with a larger vision. Software that becomes a valuable
			tool, deeply understood and appreciated by its audience.
		</p>
		<p>
			Beyond development, I'm passionate about understanding how to effectively market and
			distribute digital products, eager to connect directly with users and build a community around
			valuable solutions
		</p>
	</section>

	<Experience />
</div>
