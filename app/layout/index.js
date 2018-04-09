import {HtmlElement, ContentPlaceholder, Link} from "cx/widgets";

export default <cx>
    <div class="app">
        <header ws>
            <img class="logo" src="~/assets/img/cxjs.svg" />

            <Link href="~/" url-bind="url">Home</Link>
            <Link href="~/about" url-bind="url">About</Link>
        </header>
        <main>
            <ContentPlaceholder />
        </main>
        <footer>

        </footer>
    </div>
</cx>