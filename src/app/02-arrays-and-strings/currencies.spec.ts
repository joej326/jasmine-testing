import { getCurrencies } from "./getCurrencies";







describe('currencies test', ()=>{
    it('should return the supported currencies', ()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('EUR');
        expect(result).toContain('AUD');
    });
});