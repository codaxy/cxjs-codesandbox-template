import {Route, PureContainer, Sandbox} from "cx/widgets";

import AppLayout from "../layout";
import Default from "./default";
import About from "./about";

export default <cx>
    <PureContainer outerLayout={AppLayout}>
        <Sandbox key-bind="url" storage-bind="pages">
            <Route url-bind="url" route="~/">
                <Default />
            </Route>
            <Route url-bind="url" route="~/about">
                <About />
            </Route>
        </Sandbox>
    </PureContainer>
</cx>