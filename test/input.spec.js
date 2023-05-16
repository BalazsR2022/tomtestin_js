describe('Input tesztelése', () => {
    it('Szám', () => {
       let actual = checkInput(30);
       expect(actual).toBe(true);
    });
    it('Szám', () => {
        let actual = checkInput('aa');
        expect(actual).toBe(false);
     });
     it(' 0 input', () => {
        let actual = checkInput(0);
        expect(actual).toBe(false);
     });
     it('  -5 input', () => {
        let actual = checkInput(-5);
        expect(actual).toBe(false);
     });

});