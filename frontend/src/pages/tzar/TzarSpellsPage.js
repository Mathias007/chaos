import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import TzarSpellsTable from "./data/TzarSpellsTable";
import { Layout } from "antd";

const { TZAR_SPELLS } = allocationKeys;

class TzarSpellsPage extends Component {
    state = {
        allocationKey: TZAR_SPELLS
    };
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
                <TzarSpellsTable />
            </Layout>
        );
    }
}

export default TzarSpellsPage;
