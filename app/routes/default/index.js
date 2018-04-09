import {HtmlElement, TextField} from "cx/widgets";

export default (
    <cx>
        <div ws>
            <h3>Home</h3>
            What is your name?
            <TextField value-bind="$page.name"/>
            <p visible-expr="!!{$page.name}" ws>
                Hello <span text-tpl="{$page.name}"/>! Welcome to <a href="https://cxjs.io" target="_blank">CxJS</a>.
            </p>
        </div>
    </cx>
);
