export interface Database {
	poems: DbPoem[]
	publications: Publication[]
	translators: Translator[]
}

export interface DbPoem {
	id: number
	englishText: string
	japaneseText?: string
	publicationId: number
	translatorId: number
	notes?: string
	editing: false
}

export interface Poem extends DbPoem {
	translator: Translator
	publication: Publication
}

export interface Translator {
	id: number
	name: string
}

export interface Publication {
	id: number
	description: string
}
