import prompt from '/prompt'

const height = document.querySelector('main').clientHeight - document.getElementById('prompt-title').clientHeight - document.getElementById('prompt').clientHeight - 35
console.log(height)
document.getElementById('ipt').style.height = height + 'px'

document.getElementById('stat-chs').innerHTML = 0
document.getElementById('stat-tme').innerHTML = 0
document.getElementById('stat-tme-spt').innerHTML = 0

const create_span = (ch, i) => {
	if (ch === '\n') {
		const br = document.createElement('br')
		document.getElementById('prompt').append(br)
		return;
	}

	const span = document.createElement('span')
	span.setAttribute('id', i)
	span.append(document.createTextNode(ch))
	document.getElementById('prompt').append(span)
}

const load_follow_text = (prompt) => {
	document.getElementById('prompt-title').innerHTML = prompt.title
	prompt.text.split('').forEach((c, i) => create_span(c, i))
}
load_follow_text(prompt)

const load_follow_audio = (prompt) => {}

const data = {
	init: 0,
	fin: 0,
	timeout: '',
	time: 0,
	interval: '',
	q: []
}

document.addEventListener('keydown', e => {
	if (!data.interval)
		data.interval = setInterval(() => {
			data.time += .1
			document.getElementById('stat-tme').innerHTML = data.time
		}, 100)
	if (!data.init)
		data.init = Date.now()
	if (data.timeout)
		clearTimeout(data.timeout)

	const idx = data.q.length
	switch (e.key) {
		case 'Backspace':
			const ch = document.getElementById(idx - 1)
			if (data.q.length)
				data.q.pop()
			if (ch && ch.style.background !== 'transparent')
				ch.style.background = 'transparent'
			break;
		default:
			data.q.push(e.key)
			if (prompt.text[idx] !== data.q[idx])
				document.getElementById(idx).style.background = 'lightsalmon'
	}

	data.timeout = setTimeout(() => {
		const passed = Date.now() - data.init - 500
		if (passed > 0)
			data.fin += passed
		data.init = 0
	}, 500)

	document.getElementById('stat-chs').innerHTML = data.q.length
	document.getElementById('stat-tme-spt').innerHTML = data.fin / 1000 + 's'
})
