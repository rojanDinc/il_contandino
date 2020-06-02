const text = 
`Moretti zero                         40
lemonade                              30
läsk o minerall vatten       25`

const splitted = text.split("\n")
	.map(row => row.split("  "))
	.map(row => Object({name: row[0].trim(), price: row[row.length-1].trim()}))

console.log(splitted)