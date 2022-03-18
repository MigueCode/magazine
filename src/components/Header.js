import { Menu } from "./Menu.js"
import { Subtitle } from "./Subtitle.js"
import { Title } from "./Title.js"

export function Header() {
    let $header = document.createElement("header"), $headerTexts = document.createElement("div"), $headerMenu = document.createElement("div")

    $headerTexts.appendChild(Title())
    $headerTexts.appendChild(Subtitle())
    $headerMenu.appendChild(Menu())


    $header.appendChild($headerTexts)
    $header.appendChild($headerMenu)


    return $header
}