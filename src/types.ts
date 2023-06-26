export interface Database {
	poems: Poem[]
	publications: Publication[]
	translators: Translator[]
}

export interface Poem {
	id: number
	englishText: string
	japaneseText?: string
	publicationId: number
	translatorId: number
	notes?: string
	editing: false
}

export interface Translator {
	id: number
	name: string
}

export interface Publication {
	id: number
	description: string
}
