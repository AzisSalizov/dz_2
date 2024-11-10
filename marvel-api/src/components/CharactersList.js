// src/components/CharactersList.js
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters, setFilter} from '../redux/actions';
import {Button, ButtonGroup, Card, Container, Row, Col} from 'react-bootstrap';

const CharactersList = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);
    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    const filteredCharacters = characters.filter((character) => {
        if (filter === 'ALL') return true;
        if (filter === 'WITH_DESCRIPTION') return character.description;
        if (filter === 'WITHOUT_DESCRIPTION') return !character.description;
        return true;
    });

    return (
        <Container>
            <h1>Marvel Characters</h1>
            <ButtonGroup className="mb-3">
                <Button onClick={() => dispatch(setFilter('ALL'))}>All</Button>
                <Button onClick={() => dispatch(setFilter('WITH_DESCRIPTION'))}>With Description</Button>
                <Button onClick={() => dispatch(setFilter('WITHOUT_DESCRIPTION'))}>Without Description</Button>
            </ButtonGroup>
            <Row>
                {filteredCharacters.map((character) => (
                    <Col md={4} key={character.id} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                            />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                    {character.description || 'No description available'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CharactersList;
