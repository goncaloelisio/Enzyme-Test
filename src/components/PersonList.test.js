import React from 'react';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('PersonList', () => {
    it('renders a ul element', () => {
        const personListWrapper = shallow(<PersonList />);
        const peopleListUls = personListWrapper.find('ul');

        expect(peopleListUls).toHaveLength(1);
    });

    it('renders no li elements when no people exist', () => {
        const people = [];
        const personListWrapper = shallow(<PersonList people={people} />);
        const peopleListItems = personListWrapper.find('li');

        expect(peopleListItems).toHaveLength(0);
    });

    it('render one li element when one person exists', () => {
        const people = [{firstName: 'Alan', lastName: 'Turing'}];
        const personListWrapper = shallow(<PersonList people={people} />);
        const peopleListItems = personListWrapper.find('li');

        expect(peopleListItems).toHaveLength(1);
    });

    it('renders one li element for each person that exists', () => {
        const people = [
            {firstName: 'Jane', lastName: 'Price'},
            {firstName: 'Chevy', lastName: 'Chase'}
        ];
        const personListWrapper = shallow(<PersonList people={people} />);
        const peopleListItems = personListWrapper.find('li');

        expect(peopleListItems).toHaveLength(2);
    });

    it('renders the first and last name of a person', () => {
        const people = [{firstName: 'John', lastName: 'Travel'}];
        const personListWrapper = shallow(<PersonList people={people} />);

        expect(personListWrapper.find('li').text()).toContain(people[0].firstName);
        expect(personListWrapper.find('li').text()).toContain(people[0].lastName);
    });
});