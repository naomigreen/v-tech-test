import { h, render } from "preact"
import App from "./components/app.component";

declare let window: Window;
declare module 'png';

const root: HTMLElement = document.getElementById('searchAppTarget')
const target: HTMLElement = document.querySelector('.renderTarget')

render(<App />, root, target)