# Brain Health App

Web app for typing, speaking and logic to improve mental ability

Reference: _Keyboard Kommander (Steam)

# Description

**Authentication**: A user's name and contact information don't seem relevant to details of typing speed. However, a user will need a login to distinguish their data from another's and if ever the circumstance arises, to avoid someone using and adding to their data.

	-------------------------
		Continue as Guest
			User ID

		or  | Sign up |
	-------------------------


	User ID							Login
	Login =
	----------------------------
		Select OAuth service
	----------------------------

## Typing
Users type on keyboards under different contexts. The conditions of these contexts affect their state of mind, or rather their current mental processes. Regular typing tests rely on having a user type a text they may or may not be familiar with as they read it. This is different from thinking of an answer, coordinating an answer or solution to a prompt, and transcribing an audio source. Given that regular tests only use typing a read prompt, this indicates the assumption that a person is faster or more consistent when typing what they're reading, but this is unrealistic. Most times when most people are typing, it's not something they're reading.

The mental states identified are then matched to whether the user is typing in a native language or from and to codes like shorthand and programming. One might think that speed and accuracy is not as necessary for shorthand and programming, but given shorthand is often for transcription or notetaking, along with programming, increasing one's speed and accuracy can only help to improve one's capacity for completing their work.

Touch typing?

### JS Prototype
Main functionality:
- User types characters
- Track time while typing
- Calculate and display cps/wpm

1. Follow Prompt
   - Display title
   - Display prompt text or audio player and select[ideal speed] (countdown + silence)
   - Validation: character match
2. Answer Prompt
   - Display title
   - Display prompt
   - View previous answers (if applicable)
   - Validation: word spell checking
3. Format Prompt
   - Display title
   - Display prompt
   - View and add notes
   - Validation: template match, word spell checking
4. Follow Prompt
   - code
   - shorthand
   - cipher
5. Solve Prompt
   - Display title
   - View prompt
   - View and add notes
   - Validation: syntax checking, execute solution

### Go/Gin prototype
Main functionality:
- Store titles and prompts (text | audio)
  - prompt id, text data, audio fk
  - audio id, slow file, med file, fast file
- Store user data
  - prompt id, user id, last cps, last wpm, fastest cps, fastest wpm

## Speaking

## Logic
For improving and practicing logical skills, users can do exercises like Einstein's riddle, or games like (Killer) Sudoku, Cross sum, and Picture Cross. However, to really practice logical reasoning (and critical thinking), a user has to put such skills into practice, namely in questioning, analyzing and making decisions on both emotional, personal, and impersonal subjects. Rather than create a mindfulness app, or a reflections journal, the point is the analysis of one's thoughts, feelings and perceptions, so this may entail some guided thinking. Focusing on essentials like sensory information, memories, known and unknowns, the guidance is simple and repetitive, but it's to learn and practice ascertaining perspective, context, content and framing. This means both games and
