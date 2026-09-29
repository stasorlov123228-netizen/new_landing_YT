import { getSettings, getPage } from "../api";
// import { hero } from "./blocks/hero.js";
import { renderBlocks } from "./renderBlocks";
import './styles/base.css';
async function start() {
    try {
        const [settings, page] = await Promise.all([
            getSettings(),
            getPage(location.pathname),
        ]);

        document.title = `${page.title} - ${settings.siteName}`;
        // const heroBlock = page.blocks.find((block) => block.type==="hero")
        // app.innerHTML = hero(heroBlock)

        app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`

    } catch (error) {
        app.textContent = `Something went wrong: ${error.message}`;
    }
}

start();