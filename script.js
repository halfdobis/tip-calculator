const bill=document.querySelector("#bill")
console.log(bill.value)

const service=document.querySelector("#service")
console.log(service.value)

const people=document.querySelector("#people")
console.log(people.value)

const calculate = (event) => {
	event.preventDefault()
	const tip = Number(bill.value) * Number(service.value) * Number(people.value)
	const total = Number(bill.value) + tip
	console.log({total, tip})

	const tipSpan=document.querySelector("#tip")

	const totalSpan=document.querySelector("#total")

	tipSpan.innerHTML = "&#8358;" + tip

	totalSpan.innerHTML = "&#8358;" + total
}

document.querySelector("#calculate").onclick = calculate



