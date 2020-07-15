window.addEventListener( 'load', start )

function start() {
    var colorRed   = 0;
    var colorGreen = 0;
    var colorBlue  = 0;

    var inputs = document.querySelectorAll('input[type="range"]')
    var inputsRangeList = Array.from(inputs)

    var results = document.querySelectorAll('input[type="text"]')
    var inputsResultList = Array.from(results)

    for( let i = 0; i < inputsRangeList.length; i++ ) {
        inputsRangeList[i].addEventListener('change', function(event) {

            var inputRedResult = inputsResultList[i]
            var colorValue     = event.target.value

            inputRedResult.value = colorValue

            switch(inputsRangeList[i].id) {
                case 'inputSlideRed':
                    rgb(colorValue, colorGreen, colorBlue)
                    break
                case 'inputSlideGreen':
                    rgb(colorRed, colorValue, colorBlue)
                    break
                case 'inputSlideBlue':
                    rgb(colorRed, colorGreen, colorValue)
                    break
                default:
                    console.log('Error')

            }
        })
    }

    function rgb(red, green, blue) {
        var shape = document.querySelector(".shape")
        shape.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }
}
