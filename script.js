let addbtn = document.getElementById('addbtn')
let clearbtn = document.getElementById('clearbtn')
let Item = document.getElementById('Item')
let Amount = document.getElementById('Amount')
let cont = document.getElementById('cont')
let tamount = 0.00
let amount = document.getElementById('amount')
let errcont = document.getElementById('errcont')
errcont.style.display = 'none'
addbtn.addEventListener('click', (e) => {
    if (Amount.value.length <= 0 && Item.value.length <= 0) {

        // let newp = document.createElement('h6')
        // newp.innerText = '';
        // // tamount += Number(Amount.value)
        // errcont.appendChild(newp)
        errcont.style.display = 'block'
    } else {
        let newp = document.createElement('p')
        newp.innerText = `${Item.value}:${Amount.value}`;
        tamount += Number(Amount.value)
        cont.appendChild(newp)
        console.log(`Item:${Item.value},Amount:${Amount.value}`)
        amount.textContent = tamount
        Amount.value = ''
        Item.value = ''
        errcont.style.display = 'none'


    }

})
clearbtn.addEventListener('click', () => {
    location.reload()
})