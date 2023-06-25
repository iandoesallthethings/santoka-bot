import * as Haiku from '$lib/Haiku'

export async function GET() {
	return new Response(Haiku.random())
}
