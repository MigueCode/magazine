export function Menu() {

    let menuDiv = document.createElement("div")
    menuDiv.classList.add("menu")

    menuDiv.innerHTML = `
        <a href="#">Noticias<a/>
        <a href="#">Articulos<a/>
        <a href="#">Videos<a/>
        <a href="#">Consejos<a/>
    `

    return menuDiv
}