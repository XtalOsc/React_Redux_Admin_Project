import expect from 'expect';
import  {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scot-allen', firstName: 'Scott', lastName: 'Allen'}
      ];
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scot-allen', text: 'Scott Allen'}
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });//end it
  });//end describe authorsFormattedForDropdown
});//end Author Selected
