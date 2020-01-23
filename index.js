const buyDate = new Date('October 28, 2019 12:00:00')
const now = new Date()
const days = Math.round((now - buyDate) / (1000 * 3600 * 24))
const mpd = 32.87
const mpy = 12000
const mileage = Math.round(days * mpd)
const daysLeft = 365 - days
const milesLeft = mpy - mileage


const input = document.getElementById('input')
const milesUnder = document.getElementById('milesUnder')
const milesOver = document.getElementById('milesOver')
const under = document.getElementById('under')
const over = document.getElementById('over')
const error = document.getElementById('error')


input.addEventListener('change', () => {

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    inputMiles = input.value
    const miles = mileage - inputMiles
    const availableDays = Math.floor(miles / mpd)

    if(isNaN(miles) || inputMiles === "") {
        error.classList.remove('hide')
        error.classList.toggle('show')
        under.classList.add('hide')
        under.classList.remove('show')
        over.classList.add('hide')
        over.classList.remove('show')
    }else {
        if (miles >= 0 && availableDays > 0) {
            milesUnder.innerHTML = formatNumber(miles)
            under.classList.add('show')
            under.classList.remove('hide')
            over.classList.add('hide')
            error.classList.remove('show')
            error.classList.add('hide')
            
        } else {
            const negMiles = Math.abs(miles)
            milesOver.innerHTML = formatNumber(negMiles)
            over.classList.add('show')
            over.classList.remove('hide')
            under.classList.add('hide')
            error.classList.remove('show')
            error.classList.add('hide')
        }
    }
})


