import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import UsersRemoveForm from "../data/UsersRemoveForm";

import { Layout, PageHeader } from "antd";

const { ADMIN_USERS, REMOVER } = navigationTitles;

class UserRemover extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showUserProfile(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={REMOVER}
                />
                <div>
                    <PageHeader
                        onBack={() => window.history.back()}
                        title="Powrót"
                        subTitle="Panel administracyjny"
                    />
                </div>
                <UsersRemoveForm idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showUserProfile: id => {
            return dispatch(users.showUserProfile(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRemover);
