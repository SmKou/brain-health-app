const prompt = {
	title: 'The Drip',
	text: `Marty was curled up on the family recliner, staring at the ceiling with his mouth wide open. He had been hearing a dripping noise while he was reading "All the King’s Men" for a book report, and it was poking at his attention. The book wasn’t so enthralling to him anyways. He tried to ignore the sound for a while, but its persistent tune entered into his reading, and the clamor of political speeches and the intrigue contained in the book were colored with the resonance of drips.

	He shoved the book down on the living room couch, not bothering to mark the page. His father and mother were not at home, both being professors who enjoyed working late in their laboratories at the University of Washington in the department of entomology.`,
	words: [['', 0, 0]]
}

for (let i = 0; i < prompt.text.length; ++i) {
	const idx = prompt.words.length - 1
	if (!['.', ',', '\'', '\"', ':', ';', '\n', '\t', ' ', '?', '!', '(', ')', '[', ']', '{', '}'].includes(prompt.text[i])) {
		prompt.words[idx][0] += prompt.text[i]
		prompt.words[idx][2] = i + 1
		continue;
	}
	else if (!prompt.words[idx][0])
		prompt.words[idx][1] = i
	else
		prompt.words.push(['', i + 1, i + 1])
}

if (!prompt.words[prompt.words.length - 1][0])
	prompt.words.pop()


export default prompt
