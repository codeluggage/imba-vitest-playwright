export class Todo
	title = '<No title>'
	done = no

	constructor title
		title = title

	def toggle
		done = !done
