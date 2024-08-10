const prompt = {
	title: 'The Drip',
	text: `Marty was curled up on the family recliner, staring at the ceiling with his mouth wide open. He had been hearing a dripping noise while he was reading "All the King’s Men" for a book report, and it was poking at his attention. The book wasn’t so enthralling to him anyways. He tried to ignore the sound for a while, but its persistent tune entered into his reading, and the clamor of political speeches and the intrigue contained in the book were colored with the resonance of drips.

	He shoved the book down on the living room couch, not bothering to mark the page. His father and mother were not at home, both being professors who enjoyed working late in their laboratories at the University of Washington in the department of entomology.

	By listening inventively, he thought the drips must be landing above him, next to the top of the staircase that leads to his parents’ bedroom. As he walked towards the dripping sound softly as to not obstruct his hearing, he tried to be alert as possible about the sound of the drips. His intuition was not far off: the drips were landing within the top stair of the staircase. "But how could something be dripping inside of the stair?" he thought. He couldn’t find any logical reason for it.`,
	words: [['', 0, 0]]
}

document.getElementById('ipt').style.height = `calc(100vh - ${document.getElementById('prompt').clientHeight}px - 36px)`

for (let i = 0; i < prompt.text.length; ++i) {
	if (prompt.text[i] === '\n') {
		const br = document.createElement('br')
		document.getElementById('prompt').append(br)
		continue;
	}
	const span = document.createElement('span')
	span.setAttribute('id', i)
	span.append(document.createTextNode(prompt.text[i]))
	document.getElementById('prompt').append(span)

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

let init_time = 0
let time_spent = 0
let timeout = ''

const queue = []

document.addEventListener('keydown', e => {
	if (!init_time)
		init_time = Date.now()
	if (timeout)
		clearTimeout(timeout)

	const idx = queue.length
	switch (e.key) {
		case 'Shift':
			document.body.focus()
			break
		case 'Backspace':
			const ch = document.getElementById(idx - 1)
			if (queue.length)
				queue.pop()
			if (ch && ch.style.background !== 'transparent')
				ch.style.background = 'transparent'
			break
		default:
			queue.push(e.key)
			if (prompt.text[idx] !== queue[idx])
				document.getElementById(idx).style.background = 'lightsalmon'
	}

	const get_time = (t) => {
		const pass = Date.now() - init_time - t
		if (pass > 0)
			time_spent += pass
		init_time = 0
	}
	timeout = setTimeout(() => get_time(500), 500)

	document.getElementById('stat-chs').innerHTML = queue.length
	document.getElementById('stat-tme').innerHTML = time_spent / 1000 + 's'
})
