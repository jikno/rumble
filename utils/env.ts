export function generateEnvSnippet(env: Record<string, string>) {
	return `\
		;(function() {
			const env = ${JSON.stringify(env)}

			if (!window.Deno) window.Deno = {}
			
			window.Deno.env = {
				toObject() {
					return {...env}
				},
				get(key) {
					return env[key]
				},
				set(key, value) {
					env[key] = value
				},
				delete(key) {
					delete env[key]
				}
			}
		})();
	`
}
