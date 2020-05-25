import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import c19pdb from '../assets/images/c19pdb.png';
import githubfinder from '../assets/images/githubfinder.png'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Mock COVID Patient Database',
                    subTitle: 'Role: Front end/ UI',
                    imgSrc: c19pdb,
                    repoLink: 'https://github.com/grantkyle/Project_2',
                    appLink: 'https://fast-wildwood-12677.herokuapp.com/#/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Github User Finder',
                    subTitle: 'Role: All',
                    imgSrc: githubfinder,
                    repoLink: 'https://github.com/grantkyle/employee-directory',
                    appLink: 'https://githubfinder192837465.netlify.app',
                    selected: false
                },
                // {
                //     id: 2,
                //     title: 'COVID Patient Database Placeholder',
                //     subTitle: 'Mock Doctor Portal',
                //     imgSrc: c19pdb,
                //     link: 'https://fast-wildwood-12677.herokuapp.com/#/',
                //     selected: false
                // },
            ]

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;

            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })

    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }

}

export default Carousel; 