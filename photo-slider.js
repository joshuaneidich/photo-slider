(() => {
    let slider = document.getElementById("slider");
    slider.addEventListener("input", (e) => {
        adjustImageWidths(e.target.value);
    })


    const adjustImageWidths = (val) => {
        console.log(val)
        let leftImageWidth = val;
        let rightImageWidth = 100 - leftImageWidth;
        let leftImage = document.getElementById("photo-left");
        let rightImage = document.getElementById("photo-right");
        leftImage.style.width = `${leftImageWidth}%`;
        rightImage.style.width = `${rightImageWidth}%`;
    }
})()
