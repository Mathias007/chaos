import React, { Component } from "react";
import { connect } from "react-redux";
import Img from "react-image";

import { textBetweenTags } from "../../../_config/globalContentVariables";
import { knights } from "../../../_store/_actions";

import styles from "../../../styles/styles";
import { Layout, Table } from "antd";

const componentClassnames = {
    images: {
        building: "knights-image-building",
        icon: "knights-image-icon",
        material: "knights-image-material",
        unit: "knights-image-unit"
    },
    content: "knights-buildings-content",
    table: "knights-buildings-table"
};

class KnightsBuildingsTable extends Component {
    state = {
        imgPath: {
            general: "img",
            section: {
                knights: "knights"
            },
            dir: {
                buildings: "budynki",
                icons: "ikony",
                materials: "surowce",
                units: "jednostki"
            },
            format: {
                bmp: "bmp",
                png: "png",
                PNG: "PNG"
            }
        },
        columnsStructure: {
            col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
            col_cost: { title: "Koszt", dataIndex: "cost", align: "left" },
            col_fields: { title: "Pola", dataIndex: "fields", align: "center" },
            col_durability: {
                title: "Wytrzymałość",
                dataIndex: "durability",
                align: "center"
            },
            col_description: { title: "Działanie", dataIndex: "description" },
            col_worker: {
                title: "Pracownik",
                dataIndex: "worker",
                align: "center"
            },
            col_image: { title: "Grafika", dataIndex: "image", align: "center" }
        },
        descriptionSubHeaders: ["Opis: ", "Potrzebuje: ", "Produkuje: "],
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showBuildings();
    }

    renderBuildings() {
        let { buildings } = this.props;

        if (buildings) {
            return buildings.map((building, index) => {
                const {
                    _id,
                    nazwa,
                    koszt,
                    pola,
                    wytrzymalosc,
                    dzialanie,
                    pracownik,
                    grafika
                } = building;
                const { deski, kamienie } = koszt;
                const { opis, potrzeby, produkcja } = dzialanie;
                return {
                    key: _id,
                    name: [nazwa, grafika],
                    cost: [deski, kamienie],
                    fields: pola,
                    durability: wytrzymalosc,
                    description: [opis, potrzeby, produkcja],
                    worker: pracownik,
                    image: grafika
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        const { general, section, dir, format } = this.state.imgPath;

        tableData = this.renderBuildings();

        const {
            col_name,
            col_cost,
            col_fields,
            col_durability,
            col_description,
            col_worker,
            col_image
        } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_name.title,
                dataIndex: col_name.dataIndex,
                align: col_name.align,
                render: name => (
                    <>
                        <h3>
                            <strong>{name[0]}</strong>
                        </h3>
                        <Img
                            className={componentClassnames.images.icon}
                            src={require(`../../../${general}/${section.knights}/${dir.icons}/${name[1]}.${format.png}`)}
                        />
                    </>
                )
            },
            {
                title: col_cost.title,
                dataIndex: col_cost.dataIndex,
                align: col_cost.align,
                render: cost => {
                    return (
                        <p>
                            {cost[0]}{" "}
                            <Img
                                className={componentClassnames.images.material}
                                src={require(`../../../${general}/${section.knights}/${dir.materials}/deska.${format.png}`)}
                            />
                            <br />
                            {cost[1]}
                            <Img
                                className={componentClassnames.images.material}
                                src={require(`../../../${general}/${section.knights}/${dir.materials}/kamien.${format.png}`)}
                            />
                        </p>
                    );
                }
            },
            {
                title: col_fields.title,
                dataIndex: col_fields.dataIndex,
                align: col_fields.align
            },
            {
                title: col_durability.title,
                dataIndex: col_durability.dataIndex,
                align: col_durability.align
            },
            {
                title: col_description.title,
                dataIndex: col_description.dataIndex,
                render: description => {
                    const { descriptionSubHeaders } = this.state;
                    return (
                        <span>
                            {description.map((fragment, index) => {
                                if (fragment) {
                                    let materialElements = fragment.match(
                                        textBetweenTags
                                    );
                                    return (
                                        <p key={fragment}>
                                            <strong>
                                                {descriptionSubHeaders[index]}
                                            </strong>
                                            {materialElements
                                                ? materialElements.map(
                                                      (element, index) => (
                                                          <Img
                                                              key={index}
                                                              className={
                                                                  componentClassnames
                                                                      .images
                                                                      .material
                                                              }
                                                              src={require(`../../../${general}/${section.knights}/${dir.materials}/${element}.${format.png}`)}
                                                          />
                                                      )
                                                  )
                                                : fragment}
                                        </p>
                                    );
                                } else return null;
                            })}
                        </span>
                    );
                }
            },
            {
                title: col_worker.title,
                dataIndex: col_worker.dataIndex,
                align: col_worker.align,
                render: worker => {
                    return worker ? (
                        <Img
                            className={componentClassnames.images.unit}
                            src={require(`../../../${general}/${section.knights}/${dir.units}/${worker}.${format.PNG}`)}
                        />
                    ) : null;
                }
            },
            {
                title: col_image.title,
                dataIndex: col_image.dataIndex,
                align: col_image.align,
                render: image => (
                    <Img
                        className={componentClassnames.images.building}
                        width="120px"
                        height="100px"
                        src={require(`../../../${general}/${section.knights}/${dir.buildings}/${image}.${format.bmp}`)}
                    />
                )
            }
        ];

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        buildings: state.knights.buildings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showBuildings: () => dispatch(knights.showBuildings())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KnightsBuildingsTable);
