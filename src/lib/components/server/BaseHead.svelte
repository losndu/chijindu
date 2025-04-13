<script lang="ts">
	import { page } from '$app/state';
	import { sanitizeTitle } from '$lib/utils/sanitise';

	const pageUrl = page.url.origin;
	const image = `${pageUrl}/preview-image.jpg`;
	const title = 'Chijindu Julian - Software Developer, Technical Writer';
	const description =
		'Chijindu Julian is a software developer and technical writer.';

	const sanitizedTitle = sanitizeTitle(title ?? '');
	const sanitizedDescription = sanitizeTitle(description ?? '');
</script>

<svelte:head>
	<title>{sanitizedTitle}</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="generator" content="Chijindu Julian" />

	<!-- OG meta tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={sanitizedTitle} />
	<meta property="og:description" content={sanitizedDescription} />
	<meta property="og:image" content={image} />

	<!-- Twitter meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={sanitizedTitle} />
	<meta name="twitter:description" content={sanitizedDescription} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:url" content={pageUrl} />
	<meta name="twitter:site" content="@losndu" />

	<!-- General meta tags -->
	<meta name="title" content={sanitizedTitle} />
	<meta name="description" content={sanitizedDescription} />
</svelte:head>
