const toggleLight = document.getElementById('toggleLight');
const toggleDark = document.getElementById('toggleDark');

toggleLight.addEventListener('change', () => {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
})

toggleDark.addEventListener('change', () => {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');

    },1000)
}
