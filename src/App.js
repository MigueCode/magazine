import { Header } from "./components/Header.js"

export function App() {
    const $ROOT = document.getElementById("root")
    $ROOT.appendChild(Header())
}
