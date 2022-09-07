import createClient from '$lib/prismicio'

export async function load({ fetch, request }) {
	const UID = 'homepage';
	const client = createClient({ fetch, request });
	const document = await client.getByUID('page', UID);

  console.log(document);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}