class CardChameleon {
	private message: string
	private deck: string[]
	private pad: Map<string, string>
	private reversePad: Map<string, string>
	private keyDeck: string[]

	constructor() {
		this.message = message
		this.deck = deck

		{
			const alphabets1 = 'ABCDEFGHIJKLM'
			const alphabets2 = 'NOPQRSTUVWXYZ'
			const deckCards = 'A23456789TJQK'

			const [halfPad, reverseHalfPad] = alphabets1.split('').reduce(
				(acc: [Map<string, string>, Map<string, string>], curr, idx) => {
					acc[0].set(`${deckCards[idx]}C`, curr)
					acc[0].set(`${deckCards[idx]}D`, curr)

					acc[1].set(curr, `${deckCards[idx]}C`)
					acc[1].set(curr, `${deckCards[idx]}D`)

					return acc
				},
				[new Map(), new Map()]
			)

			const [pad, reversePad] = alphabets2.split('').reduce(
				(acc: [Map<string, string>, Map<string, string>], curr, idx) => {
					acc[0].set(`${deckCards[idx]}H`, curr)
					acc[0].set(`${deckCards[idx]}S`, curr)

					acc[1].set(curr, `${deckCards[idx]}H`)
					acc[1].set(curr, `${deckCards[idx]}S`)

					return acc
				},
				[halfPad, reverseHalfPad]
			)

			pad.set('XB', ' ')
			pad.set('XR', ' ')

			this.pad = pad
			this.reversePad = reversePad
		}

		{
			const [blackPile, redPile] = this.deck.reduce(
				(acc: [string[], string[]], curr: string) => {
					curr.includes('C') || curr.includes('S') || curr === 'XB'
						? acc[0].push(curr)
						: acc[1].push(curr)

					return acc
				},
				[[], []]
			)

			const keyDeck = blackPile.reduce((acc: string[], curr, idx) => {
				acc.push(redPile[idx])
				acc.push(curr)

				return acc
			}, [])

			this.keyDeck = keyDeck
		}
	}

	//encrypt logic broken
	public encrypt(message: string, deck: string[]) {
		return message.split('').reduce((acc: string[], curr, idx) => {
			const blackCard = this.reversePad.get(curr) ?? ''
			const idxOfBlackCardInKeyDeck = this.keyDeck.findIndex((char) => char === blackCard)
			const idxOfRedCardAboveInKeyDeck = idxOfBlackCardInKeyDeck - 1
			const redCard = this.keyDeck[idxOfRedCardAboveInKeyDeck]
			const redLetter = this.pad.get(redCard) ?? ''
			const blackCardFromRedLetter = this.reversePad.get(redLetter) ?? ''
			const idxOfNewBlackCardInKeyDeck = this.keyDeck.findIndex(
				(char) => char === blackCardFromRedLetter
			)
			const idxOfNewRedCardAboveInKeyDeck = idxOfNewBlackCardInKeyDeck - 1
			const newRedCard = this.keyDeck[idxOfNewRedCardAboveInKeyDeck]
			const encryptedChar = this.pad.get(newRedCard) ?? ''

			acc.push(encryptedChar)
			;[this.keyDeck[idxOfNewRedCardAboveInKeyDeck], this.keyDeck[0]] = [
				this.keyDeck[0],
				this.keyDeck[idxOfNewRedCardAboveInKeyDeck],
			]
			;[this.keyDeck[0], this.keyDeck[this.keyDeck.length - 1]] = [
				this.keyDeck[this.keyDeck.length - 1],
				this.keyDeck[0],
			]
			;[this.keyDeck[1], this.keyDeck[this.keyDeck.length - 2]] = [
				this.keyDeck[this.keyDeck.length - 2],
				this.keyDeck[1],
			]

			return acc
		}, [])
	}
}
/**
 * Takes a String containing a message and an array of Strings representing a deck
 * of playing cards, and returns a String containing the text encrypted
 */

/**
 * Takes a String containing an encrypted message and an array of Strings
 * representing a deck of playing cards, and returns a String containing the
 * message decrypted
 */

const message = 'ATTACK TONIGHT ON CODEWARS'
const deck = [
	'2C',
	'6H',
	'5S',
	'7S',
	'JS',
	'8C',
	'7C',
	'2D',
	'3D',
	'8D',
	'3C',
	'KS',
	'QS',
	'2S',
	'7D',
	'TD',
	'QC',
	'TS',
	'AH',
	'5C',
	'XB',
	'TH',
	'AC',
	'9H',
	'6D',
	'4C',
	'7H',
	'3S',
	'5H',
	'KC',
	'3H',
	'6C',
	'4D',
	'8H',
	'KH',
	'8S',
	'JC',
	'5D',
	'TC',
	'9D',
	'2H',
	'9C',
	'4S',
	'4H',
	'QD',
	'AS',
	'JH',
	'6S',
	'QH',
	'9S',
	'XR',
	'JD',
	'AD',
	'KD',
]

const cardChameleon = new CardChameleon()
console.log(cardChameleon.encrypt(message, deck))
